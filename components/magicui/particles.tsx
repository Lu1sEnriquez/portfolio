"use client";

import { useEffect, useRef } from "react";

export function Particles({ quantity = 70 }: { quantity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0;
    let pointerY = 0;
    const dots = Array.from({ length: quantity }, (_, index) => ({
      x: ((index * 71) % 101) / 100,
      y: ((index * 47) % 97) / 96,
      r: 0.45 + (index % 4) * 0.3,
      speed: 0.00004 + (index % 5) * 0.000012,
    }));

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const move = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 16;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 16;
    };
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      dots.forEach((dot, index) => {
        const x = dot.x * width + pointerX * (index % 3) + Math.sin(time * dot.speed + index) * 7;
        const y = dot.y * height + pointerY * (index % 2) + Math.cos(time * dot.speed + index) * 5;
        const glow = context.createRadialGradient(x, y, 0, x, y, dot.r * 4);
        glow.addColorStop(0, index % 6 === 0 ? "rgba(0,229,255,.95)" : "rgba(255,255,255,.75)");
        glow.addColorStop(1, "rgba(255,255,255,0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, dot.r * 4, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, [quantity]);

  return <canvas ref={canvasRef} className="magic-particles" aria-hidden="true" />;
}
