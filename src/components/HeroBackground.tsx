import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  x: number;
  y: number;
  z: number; // depth for parallax
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;


    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      particlesRef.current = [];

      // Increased particle count for more visual density (was 25)
      const particleCount = 45;
      
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random() * 0.8 + 0.2;
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size: (Math.random() * 1.8 + 0.4) * z,
          speedX: (Math.random() - 0.5) * 0.6 * z,
          speedY: (Math.random() - 0.5) * 0.6 * z,
          opacity: (Math.random() * 0.3 + 0.1) * z,
        });
      }
    };

    const drawGlow = (x: number, y: number, radius: number, color: string, opacity: number, isDark: boolean) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      // Light mode: usar cores mais intensas e visíveis
      const adjustedOpacity = isDark ? opacity : opacity * 2.5;
      gradient.addColorStop(0, color.replace(")", `, ${adjustedOpacity})`).replace("rgb", "rgba"));
      gradient.addColorStop(0.5, color.replace(")", `, ${adjustedOpacity * 0.5})`).replace("rgb", "rgba"));
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const isDark = themeRef.current === "dark";

      ctx.clearRect(0, 0, width, height);

      // Glow settings: mais intenso no light mode
      const glowOpacity = isDark ? 0.15 : 0.12;
      const secondaryGlowOpacity = isDark ? 0.1 : 0.1;
      const tertiaryGlowOpacity = isDark ? 0.08 : 0.08;

      const primaryX = width * 0.5 + Math.sin(time * 0.0003) * 50;
      const primaryY = height * 0.55 + Math.cos(time * 0.0002) * 30;
      // Light mode: usar azul mais saturado
      const primaryGlowColor = isDark ? "rgb(59, 130, 246)" : "rgb(37, 99, 235)";
      drawGlow(primaryX, primaryY, 350, primaryGlowColor, glowOpacity, isDark);

      const secondaryX = width * 0.65 + Math.cos(time * 0.0004) * 40;
      const secondaryY = height * 0.48 + Math.sin(time * 0.0003) * 25;
      const secondaryGlowColor = isDark ? "rgb(99, 102, 241)" : "rgb(79, 70, 229)";
      drawGlow(secondaryX, secondaryY, 280, secondaryGlowColor, secondaryGlowOpacity, isDark);

      const tertiaryX = width * 0.35 + Math.sin(time * 0.0002) * 40;
      const tertiaryY = height * 0.6 + Math.cos(time * 0.0003) * 20;
      const tertiaryGlowColor = isDark ? "rgb(139, 92, 246)" : "rgb(109, 40, 217)";
      drawGlow(tertiaryX, tertiaryY, 220, tertiaryGlowColor, tertiaryGlowOpacity, isDark);

      // Partículas: cores e opacidades ajustadas por tema
      // Dark: branco suave | Light: azul escuro/cinza profundo
      const particleColor = isDark ? "100, 150, 255" : "30, 64, 175";
      const particleCoreColor = isDark ? "200, 220, 255" : "37, 99, 235";
      const opacityMultiplier = isDark ? 1 : 2.2;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const drawX = particle.x;
        const drawY = particle.y;

        // Glow externo da partícula
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, particle.size * 4);
        gradient.addColorStop(0, `rgba(${particleColor}, ${particle.opacity * 0.8 * opacityMultiplier})`);
        gradient.addColorStop(0.4, `rgba(${particleColor}, ${particle.opacity * 0.3 * opacityMultiplier})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(drawX, drawY, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core sólido da partícula
        ctx.beginPath();
        ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleCoreColor}, ${particle.opacity * 0.7 * opacityMultiplier})`;
        ctx.fill();
      });

      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 75%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default HeroBackground;
