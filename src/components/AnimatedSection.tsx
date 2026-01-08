import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  /**
   * Controla apenas o comportamento de overflow do WRAPPER.
   * - clip (padrão): clippa o eixo X (evita overflow lateral) e mantém o eixo Y visível (glows não “cortam” em cima/baixo)
   * - visible: permite overflow (use apenas quando necessário)
   */
  overflow?: "clip" | "visible";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  overflow = "clip",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    "fade-up": {
      hidden: "opacity-0 translate-y-4",
      visible: "opacity-100 translate-y-0",
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-4",
      visible: "opacity-100 translate-x-0",
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-4",
      visible: "opacity-100 translate-x-0",
    },
    "scale": {
      hidden: "opacity-0 scale-[0.98]",
      visible: "opacity-100 scale-100",
    },
  };

  const { hidden, visible } = animations[animation];

  /**
   * IMPORTANT (scrollbar/overflow stability):
   * 1) O wrapper controla overflow e não anima layout.
   * 2) A animação acontece SOMENTE no elemento interno (opacity/transform).
   * 3) Para evitar “overflow lateral fantasma” em alguns browsers durante translate,
   *    usamos clip no eixo X (com fallback hidden) + transform-gpu.
   */
  const wrapperClass =
    overflow === "visible" ? "overflow-visible" : "overflow-x-hidden overflow-y-visible";

  return (
    <div
      ref={ref}
      className={`contain-paint min-w-0 max-w-full ${wrapperClass} ${className}`.trim()}
      style={overflow === "clip" ? { overflowX: "clip" } : undefined}
    >
      <div
        className={`transform-gpu transition-[opacity,transform] duration-700 ease-out will-change-transform ${
          isVisible ? visible : hidden
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
