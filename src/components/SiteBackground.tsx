import { useEffect, useRef } from "react";

type Sheep = { x: number; y: number; vx: number; vy: number; char: "M" | "W"; size: number };

export default function SiteBackground({
  density = 0.000055,      // fewer letters overall (subtle)
  repelRadius = 130,       // small influence bubble
  repelStrength = 380,     // gentle push
  maxSpeed = 50,           // slower drifting
  separationRadius = 22,   // spacing between letters
  separationStrength = 45, // light separation force
}: {
  density?: number;
  repelRadius?: number;
  repelStrength?: number;
  maxSpeed?: number;
  separationRadius?: number;
  separationStrength?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const sheepRef = useRef<Sheep[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const mousePrevRef = useRef({ x: -9999, y: -9999, t: performance.now() });
  const mouseVelRef = useRef({ vx: 0, vy: 0 });
  const lastTsRef = useRef<number>(performance.now());
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  const rnd = (a: number, b: number) => a + Math.random() * (b - a);

  // Fullscreen fixed canvas
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = window.innerWidth * window.innerHeight;
      const targetCount = Math.round(area * density);
      const arr: Sheep[] = [];
      for (let i = 0; i < targetCount; i++) {
        arr.push({
          x: rnd(0, window.innerWidth),
          y: rnd(0, window.innerHeight),
          vx: rnd(-10, 10),
          vy: rnd(-10, 10),
          char: Math.random() < 0.5 ? "M" : "W",
          size: rnd(13, 20),
        });
      }
      sheepRef.current = arr;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [density]);

  // Mouse position + velocity (viewport coords)
useEffect(() => {
    const move = (e: PointerEvent) => {
      const x = e.clientX, y = e.clientY;
      const now = performance.now();
      const dt = Math.max(1, now - mousePrevRef.current.t) / 1000;
      if (mousePrevRef.current.x > -9990) {
        mouseVelRef.current.vx = (x - mousePrevRef.current.x) / dt;
        mouseVelRef.current.vy = (y - mousePrevRef.current.y) / dt;
      }
      mousePrevRef.current = { x, y, t: now };
      mouseRef.current = { x, y };
    };
    const leave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
      mouseVelRef.current = { vx: 0, vy: 0 };
      mousePrevRef.current = { x: -9999, y: -9999, t: performance.now() };
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, []);

  // Animation loop (no center-pull; subtle)
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let running = true;

    const step = (ts: number) => {
      if (!running) return;
      rafRef.current = requestAnimationFrame(step);

      const W = window.innerWidth, H = window.innerHeight;
      const dt = Math.min(0.033, (ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      ctx.clearRect(0, 0, W, H);

      const flock = sheepRef.current;
      const dog = mouseRef.current;
      const dogV = mouseVelRef.current;

      // Gentle global tuning
      const damping = 0.97;
      const wanderK = reducedMotion ? 0 : 3;
      const followK = 0.05;
      const edgeZone = 28;
      const edgeK = 35;
      const max = maxSpeed;

      // Local separation (avoid overlapping)
      for (let i = 0; i < flock.length; i++) {
        const a = flock[i];
        let sepX = 0, sepY = 0, n = 0;
        for (let j = i + 1; j < flock.length; j++) {
          const b = flock[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          if (d2 > 0 && d2 < separationRadius * separationRadius) {
            const d = Math.sqrt(d2) || 1;
            const ux = dx / d, uy = dy / d;
            const f = (separationStrength * (1 - d / separationRadius));
            sepX += ux * f; sepY += uy * f;
            b.vx -= ux * f * dt; b.vy -= uy * f * dt; // equal/opposite
            n++;
          }
        }
        if (n > 0) { a.vx += (sepX / n) * dt; a.vy += (sepY / n) * dt; }
      }

      for (let s of flock) {
        // light wander
        if (!reducedMotion) {
          s.vx += Math.cos((ts * 0.0012 + s.y) * 0.33) * wanderK * dt;
          s.vy += Math.sin((ts * 0.0010 + s.x) * 0.33) * wanderK * dt;
        }

        // gentle cursor repel + “wind” from mouse velocity
        const dx = s.x - dog.x, dy = s.y - dog.y;
        const d2 = dx*dx + dy*dy;
        if (dog.x > -9990 && d2 > 0) {
          const d = Math.sqrt(d2);
          if (d < repelRadius) {
            const q = 1 - (d * d) / (repelRadius * repelRadius);
            const fall = q * q;
            const ux = dx / d, uy = dy / d;
            s.vx += ux * repelStrength * fall * dt;
            s.vy += uy * repelStrength * fall * dt;
            s.vx += dogV.vx * followK * fall * dt;
            s.vy += dogV.vy * followK * fall * dt;
          }
        }

        // edges only (no center attraction at all)
        if (s.x < edgeZone) s.vx += edgeK * dt;
        if (s.y < edgeZone) s.vy += edgeK * dt;
        if (s.x > W - edgeZone) s.vx -= edgeK * dt;
        if (s.y > H - edgeZone) s.vy -= edgeK * dt;

        // damping + clamp
        s.vx *= damping; s.vy *= damping;
        const sp = Math.hypot(s.vx, s.vy);
        if (sp > max) { s.vx = (s.vx / sp) * max; s.vy = (s.vy / sp) * max; }

        // integrate
        s.x += s.vx * dt; s.y += s.vy * dt;

        // contain
        if (s.x < 0) { s.x = 0; s.vx *= -0.6; }
        if (s.y < 0) { s.y = 0; s.vy *= -0.6; }
        if (s.x > W) { s.x = W; s.vx *= -0.6; }
        if (s.y > H) { s.y = H; s.vy *= -0.6; }

        // draw — American Typewriter, light gray
        ctx.save();
        ctx.font = `${s.size}px "American Typewriter", "Courier New", Courier, serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgba(209,213,219,0.65)"; // gray-300-ish
        ctx.globalAlpha = 0.55 + Math.sin(ts * 0.001 + s.x * 0.01) * 0.2; // subtle shimmer
        ctx.fillText(s.char, s.x, s.y);
        ctx.restore();
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { running = false; if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [density, maxSpeed, repelRadius, repelStrength, separationRadius, separationStrength, reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none"
      aria-hidden
    />
  );
}