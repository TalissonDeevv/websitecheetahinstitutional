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
      gradient.addColorStop(0.5, color.replace(")", `, ${opacity * 0.4})`).replace("rgb", "rgba"));
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

      // Primary glow - centered, where headline is
      const primaryX = width * 0.5 + Math.sin(time * 0.0003) * 50;
      const primaryY = height * 0.45 + Math.cos(time * 0.0002) * 30;
      drawGlow(primaryX, primaryY, 350, "rgb(59, 130, 246)", 0.12);

      // Secondary glow - slightly right
      const secondaryX = width * 0.65 + Math.cos(time * 0.0004) * 40;
      const secondaryY = height * 0.35 + Math.sin(time * 0.0003) * 25;
      drawGlow(secondaryX, secondaryY, 280, "rgb(99, 102, 241)", 0.08);

      // Tertiary glow - slightly left
      const tertiaryX = width * 0.35 + Math.sin(time * 0.0002) * 40;
      const tertiaryY = height * 0.5 + Math.cos(time * 0.0003) * 20;
      drawGlow(tertiaryX, tertiaryY, 220, "rgb(139, 92, 246)", 0.06);

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
      {/* Fade to top and bottom */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 20%, transparent 70%, hsl(var(--background)) 100%)"
        }}
      />
    </div>
  );
};

export default HeroBackground;
