import Container from "../components/Container";
import { site } from "../content/site";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import SheepFlock from "../components/SheepFlock";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-25, 25], [-6, 6]), { stiffness: 120, damping: 12 });
  const rotX = useSpring(useTransform(my, [-25, 25], [6, -6]), { stiffness: 120, damping: 12 });

  useEffect(() => {
    if (prefersReduced) return;
    const handle = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      mx.set(((e.clientX - w / 2) / w) * 50);
      my.set(((e.clientY - h / 2) / h) * 50);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [prefersReduced, mx, my]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* interactive background */}
      <SheepFlock density={0.00011} repelRadius={170} repelStrength={1200} />


      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Text */}
          <div>
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight">
              Hello,<br />I&apos;m Matt.
            </h1>
            <p className="mt-3 text-lg text-muted max-w-2xl">{site.tagline}</p>

            <div className="mt-6 flex gap-3">
              <a href="#projects" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition">
                View Projects
              </a>
              <a href="/resume.pdf" className="rounded-full border border-border px-4 py-2 text-sm hover:bg-card transition">
                Resume
              </a>
            </div>
          </div>

          {/* Interactive illustration */}
          <div className="hidden lg:flex items-center justify-end relative">
            <motion.div
              className="relative"
              style={!prefersReduced ? { rotateX: rotX, rotateY: rotY } : undefined}
              whileHover={!prefersReduced ? { scale: 1.03, rotate: 1 } : undefined}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
            >
              <motion.img
                src="/robot-illustration-2.png"
                alt="Two friendly robots cooking over a pot"
                className="w-full max-w-sm select-none"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.12))" }}
                animate={
                  prefersReduced
                    ? undefined
                    : { y: [0, -8, 0], rotate: [0, 0.6, -0.6, 0] }
                }
                transition={prefersReduced ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}