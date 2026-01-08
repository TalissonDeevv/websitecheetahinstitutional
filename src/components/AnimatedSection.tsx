import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up" 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animations = {
    "fade-up": {
      hidden: "opacity-0 translate-y-4",
      visible: "opacity-100 translate-y-0"
    },
    "fade-left": {
      hidden: "opacity-0 -translate-x-4",
      visible: "opacity-100 translate-x-0"
    },
    "fade-right": {
      hidden: "opacity-0 translate-x-4",
      visible: "opacity-100 translate-x-0"
    },
    "scale": {
      hidden: "opacity-0 scale-[0.98]",
      visible: "opacity-100 scale-100"
    }
  };

  const { hidden, visible } = animations[animation];

  /**
   * IMPORTANT (scrollbar/overflow stability):
   * We never animate the layout-controlling wrapper. Instead, we clip overflow on the wrapper
   * and animate only an inner element (opacity/transform). This prevents transient vertical
   * overflow that can spawn a second scrollbar on mobile.
   */
  return (
    <div
      ref={ref}
      className={`overflow-x-hidden overflow-y-visible contain-paint ${className}`.trim()}
    >
      <div
        className={`transition-[opacity,transform] duration-700 ease-out will-change-transform ${
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
