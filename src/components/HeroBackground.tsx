import { useEffect, useRef } from "react";

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
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const initParticles = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      particlesRef.current = [];
      
      // Reduced particle count for elegance
      for (let i = 0; i < 25; i++) {
        const z = Math.random() * 0.8 + 0.2; // depth: 0.2 to 1.0
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size: (Math.random() * 2 + 0.5) * z, // size varies with depth
          speedX: (Math.random() - 0.5) * 0.15 * z, // slower, depth-based
          speedY: (Math.random() - 0.5) * 0.15 * z,
          opacity: (Math.random() * 0.25 + 0.08) * z, // subtle opacity with depth
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

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

      // Primary glow - centered
      const primaryX = width * 0.5 + Math.sin(time * 0.0003) * 50;
      const primaryY = height * 0.45 + Math.cos(time * 0.0002) * 30;
      drawGlow(primaryX, primaryY, 350, "rgb(59, 130, 246)", 0.15);

      // Secondary glow
      const secondaryX = width * 0.65 + Math.cos(time * 0.0004) * 40;
      const secondaryY = height * 0.35 + Math.sin(time * 0.0003) * 25;
      drawGlow(secondaryX, secondaryY, 280, "rgb(99, 102, 241)", 0.1);

      // Tertiary glow
      const tertiaryX = width * 0.35 + Math.sin(time * 0.0002) * 40;
      const tertiaryY = height * 0.5 + Math.cos(time * 0.0003) * 20;
      drawGlow(tertiaryX, tertiaryY, 220, "rgb(139, 92, 246)", 0.08);

      // Draw particles with parallax effect
      particlesRef.current.forEach((particle) => {
        // Apply subtle parallax based on mouse position and depth
        const parallaxX = mouseRef.current.x * 30 * particle.z;
        const parallaxY = mouseRef.current.y * 20 * particle.z;
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const drawX = particle.x + parallaxX;
        const drawY = particle.y + parallaxY;

        // Draw particle with soft glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          drawX, drawY, 0,
          drawX, drawY, particle.size * 4
        );
        gradient.addColorStop(0, `rgba(0, 71, 171, ${particle.opacity * 0.8})`);
        gradient.addColorStop(0.4, `rgba(0, 71, 171, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(drawX, drawY, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core of particle
        ctx.beginPath();
        ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.6})`;
        ctx.fill();
      });

      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
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
          background: "linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 75%, hsl(var(--background)) 100%)"
        }}
      />
    </div>
  );
};

export default HeroBackground;
