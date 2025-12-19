import { useEffect, useRef } from "react";

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGlow = (x: number, y: number, radius: number, color: string, opacity: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color.replace(")", `, ${opacity})`).replace("rgb", "rgba"));
      gradient.addColorStop(0.5, color.replace(")", `, ${opacity * 0.3})`).replace("rgb", "rgba"));
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Primary glow - moves slowly
      const primaryX = width * 0.7 + Math.sin(time * 0.0003) * 100;
      const primaryY = height * 0.2 + Math.cos(time * 0.0002) * 50;
      drawGlow(primaryX, primaryY, 400, "rgb(59, 130, 246)", 0.15);

      // Secondary glow - accent
      const secondaryX = width * 0.3 + Math.cos(time * 0.0004) * 80;
      const secondaryY = height * 0.4 + Math.sin(time * 0.0003) * 40;
      drawGlow(secondaryX, secondaryY, 300, "rgb(99, 102, 241)", 0.1);

      // Tertiary subtle glow
      const tertiaryX = width * 0.5 + Math.sin(time * 0.0002) * 60;
      const tertiaryY = height * 0.1 + Math.cos(time * 0.0003) * 30;
      drawGlow(tertiaryX, tertiaryY, 250, "rgb(139, 92, 246)", 0.08);

      // Draw floating particles
      for (let i = 0; i < 20; i++) {
        const particleX = (width * ((i * 7) % 100) / 100) + Math.sin(time * 0.001 + i) * 20;
        const particleY = (height * ((i * 13) % 100) / 100) + Math.cos(time * 0.001 + i) * 20;
        const particleSize = 1 + (i % 3);
        const particleOpacity = 0.1 + (i % 5) * 0.02;

        ctx.beginPath();
        ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${particleOpacity})`;
        ctx.fill();
      }

      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Fade to bottom gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 40%, hsl(var(--background)) 100%)"
        }}
      />
    </div>
  );
};

export default HeroBackground;
