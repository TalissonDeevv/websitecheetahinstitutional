import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowLayerProps = {
  children: ReactNode;
  className?: string;
  /**
   * Aplica máscara para o glow “sumir” nas bordas do viewport/container.
   * Isso evita cortes bruscos quando usamos overflow-x: clip.
   */
  fade?: "none" | "y";
};

/**
 * Layer decorativa para glows/blur que nunca deve gerar overflow lateral.
 * - Clippa eixo X (fallback hidden + overflowX: clip)
 * - Mantém eixo Y visível
 * - Opcionalmente aplica mask vertical (fade) para evitar “corte” no topo/rodapé
 */
export default function GlowLayer({ children, className, fade = "y" }: GlowLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 contain-paint overflow-x-hidden overflow-y-visible",
        className
      )}
      style={{
        overflowX: "clip",
        ...(fade === "y"
          ? {
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
}
