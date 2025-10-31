import { useEffect, useRef } from "react";

// Tiny flock simulation: letters "M" & "W" wander and gently
// repel from the cursor (the "dog"). Canvas is scaled for Retina.

type Sheep = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: "M" | "W";
  size: number; // font size px
  hue: number;
};

export default function SheepFlock({
  density = 0.00009,      // sheep per pixel (tweak for more/less)
  repelRadius = 140,      // how far the dog scares sheep
  repelStrength = 900,    // force multiplier
  maxSpeed = 80,          // clamp pixels / second
  showDog = true,
}: {
  density?: number;
  repelRadius?: number;
  repelStrength?: number;
  maxSpeed?: number;
  showDog?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const sheepRef = useRef<Sheep[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 }); // off-screen default
  const lastTsRef = useRef<number>(performance.now());
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  // Helpers
  const rnd = (a: number, b: number) => a + Math.random() * (b - a);
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

  // Resize + (re)seed
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Seed sheep based on area
      const area = rect.width * rect.height;
      const targetCount = Math.round(area * density);
      const arr: Sheep[] = [];
      for (let i = 0; i < targetCount; i++) {
        arr.push({
          x: rnd(0, rect.width),
          y: rnd(0, rect.height),
          vx: rnd(-20, 20),
          vy: rnd(-20, 20),
          char: Math.random() < 0.5 ? "M" : "W",
          size: rnd(14, 22),
          hue: rnd(200, 220), // calm blue-ish; you can theme this
        });
      }
      sheepRef.current = arr;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [density]);

  // Mouse tracking (window so canvas can be pointer-events-none)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const leave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Main loop
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let running = true;

    const step = (ts: number) => {
      if (!running) return;
      rafRef.current = requestAnimationFrame(step);

      const rect = canvas.getBoundingClientRect();
      const dt = Math.min(0.033, (ts - lastTsRef.current) / 1000); // cap dt
      lastTsRef.current = ts;

      // Clear
      ctx.clearRect(0, 0, rect.width, rect.height);

      const sheep = sheepRef.current;
      const dog = mouseRef.current;

      for (let s of sheep) {
        // Wander (slow noise-ish drift)
        if (!reducedMotion) {
          s.vx += Math.cos((ts * 0.001 + s.x) * 0.3) * 2 * dt;
          s.vy += Math.sin((ts * 0.001 + s.y) * 0.3) * 2 * dt;
        }

        // Repel from dog (cursor)
        const dx = s.x - dog.x;
        const dy = s.y - dog.y;
        const dist2 = dx * dx + dy * dy;
        const r2 = repelRadius * repelRadius;
        if (dist2 > 0.0001 && dist2 < r2) {
          const force = repelStrength / dist2; // inverse-square
          const mag = Math.sqrt(dist2);
          s.vx += (dx / mag) * force * dt;
          s.vy += (dy / mag) * force * dt;
        }

        // Softly steer back toward center (avoid drifting away)
        const cx = rect.width * 0.5;
        const cy = rect.height * 0.5;
        s.vx += ((cx - s.x) * 0.02) * dt;
        s.vy += ((cy - s.y) * 0.02) * dt;

        // Speed clamp
        const speed = Math.hypot(s.vx, s.vy);
        const max = maxSpeed;
        if (speed > max) {
          s.vx = (s.vx / speed) * max;
          s.vy = (s.vy / speed) * max;
        }

        // Integrate
        s.x += s.vx * dt;
        s.y += s.vy * dt;

        // Bounce within bounds
        if (s.x < 0) { s.x = 0; s.vx *= -0.6; }
        if (s.y < 0) { s.y = 0; s.vy *= -0.6; }
        if (s.x > rect.width) { s.x = rect.width; s.vx *= -0.6; }
        if (s.y > rect.height) { s.y = rect.height; s.vy *= -0.6; }

        // Draw sheep as letters (typewriter look)
        ctx.save();
        ctx.font = `${s.size}px "American Typewriter", "Courier New", Courier, serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgba(209, 213, 219, 0.7)"; // Tailwind gray-300 tone
        ctx.globalAlpha = 0.5 + Math.sin(ts * 0.001 + s.x * 0.01) * 0.25;
        ctx.fillText(s.char, s.x, s.y);
        ctx.restore();
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxSpeed, repelRadius, repelStrength, reducedMotion, showDog]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full pointer-events-none"
      aria-hidden
    />
  );
}