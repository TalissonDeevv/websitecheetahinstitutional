import { useEffect, useRef, useState } from "react";

type OverflowSuspect = {
  selector: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
  overflowX: number;
  overflowY: number;
};

type OverflowSnapshot = {
  ts: number;
  clientWidth: number;
  scrollWidth: number;
  clientHeight: number;
  scrollHeight: number;
  overflowX: number;
  overflowY: number;
  suspects: OverflowSuspect[];
};

function toSelector(el: Element) {
  const htmlEl = el as HTMLElement;
  const tag = el.tagName.toLowerCase();
  const id = htmlEl.id ? `#${htmlEl.id}` : "";
  const className = (htmlEl.className || "")
    .toString()
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((c) => `.${c}`)
    .join("");

  return `${tag}${id}${className}`;
}

function clamp(n: number) {
  return Number.isFinite(n) ? n : 0;
}

export default function OverflowDebug() {
  const [snapshot, setSnapshot] = useState<OverflowSnapshot | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastLogRef = useRef<number>(0);
  const outlinedRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const clearOutlines = () => {
      outlinedRef.current.forEach((el) => {
        el.style.outline = "";
        el.style.outlineOffset = "";
      });
      outlinedRef.current = [];
    };

    const findSuspects = (vw: number, vh: number) => {
      const suspects: OverflowSuspect[] = [];
      const elements = Array.from(document.body.querySelectorAll<HTMLElement>("*"));

      for (const el of elements) {
        // Evita elementos invisíveis/sem impacto
        if (!el.offsetParent && getComputedStyle(el).position !== "fixed") continue;

        const rect = el.getBoundingClientRect();
        const overflowRight = rect.right - vw;
        const overflowLeft = -rect.left;
        const overflowBottom = rect.bottom - vh;
        const overflowTop = -rect.top;

        const overflowX = Math.max(0, overflowRight, overflowLeft);
        const overflowY = Math.max(0, overflowBottom, overflowTop);

        if (overflowX > 1 || overflowY > 1) {
          suspects.push({
            selector: toSelector(el),
            left: clamp(rect.left),
            right: clamp(rect.right),
            top: clamp(rect.top),
            bottom: clamp(rect.bottom),
            overflowX: clamp(overflowX),
            overflowY: clamp(overflowY),
          });
        }
      }

      suspects.sort((a, b) => {
        const aScore = Math.max(a.overflowX, a.overflowY);
        const bScore = Math.max(b.overflowX, b.overflowY);
        return bScore - aScore;
      });

      return suspects.slice(0, 6);
    };

    const tick = () => {
      const doc = document.documentElement;
      const clientWidth = doc.clientWidth;
      const scrollWidth = doc.scrollWidth;
      const clientHeight = doc.clientHeight;
      const scrollHeight = doc.scrollHeight;

      const overflowX = Math.max(0, scrollWidth - clientWidth);
      const overflowY = Math.max(0, scrollHeight - clientHeight);

      // Só faz scan pesado quando há overflow real
      const suspects = overflowX > 1 || overflowY > 1 ? findSuspects(clientWidth, clientHeight) : [];

      clearOutlines();
      if (suspects.length) {
        // Outline apenas nos principais para visualização rápida
        const top = suspects.slice(0, 2).map((s) => s.selector);
        const els = Array.from(document.body.querySelectorAll<HTMLElement>("*"));
        for (const el of els) {
          const sel = toSelector(el);
          if (top.includes(sel)) {
            el.style.outline = "2px solid hsl(var(--destructive))";
            el.style.outlineOffset = "2px";
            outlinedRef.current.push(el);
          }
        }
      }

      const now = Date.now();
      if (suspects.length && now - lastLogRef.current > 350) {
        lastLogRef.current = now;
        // Log resumido (sem spam por frame)
        // eslint-disable-next-line no-console
        console.groupCollapsed(
          `[debugOverflow] overflowX=${overflowX.toFixed(0)} overflowY=${overflowY.toFixed(0)} | scrollW=${scrollWidth} clientW=${clientWidth} | scrollH=${scrollHeight} clientH=${clientHeight}`
        );
        // eslint-disable-next-line no-console
        console.table(suspects);
        // eslint-disable-next-line no-console
        console.groupEnd();
      }

      setSnapshot({
        ts: now,
        clientWidth,
        scrollWidth,
        clientHeight,
        scrollHeight,
        overflowX,
        overflowY,
        suspects,
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearOutlines();
    };
  }, []);

  if (!snapshot) return null;

  return (
    <div className="fixed bottom-3 left-3 z-[9999] w-[min(92vw,420px)] pointer-events-none">
      <div className="pointer-events-auto rounded-lg border border-border bg-card/95 backdrop-blur p-3 shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-foreground">Debug Overflow</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              Ativo via <span className="font-mono">?debugOverflow=1</span>. Quando houver overflow, o console
              mostra os suspeitos.
            </p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
          <div className="rounded-md bg-muted/40 p-2">
            <p className="font-mono">scrollW: {snapshot.scrollWidth}</p>
            <p className="font-mono">clientW: {snapshot.clientWidth}</p>
            <p className="font-mono">overflowX: {snapshot.overflowX.toFixed(0)}</p>
          </div>
          <div className="rounded-md bg-muted/40 p-2">
            <p className="font-mono">scrollH: {snapshot.scrollHeight}</p>
            <p className="font-mono">clientH: {snapshot.clientHeight}</p>
            <p className="font-mono">overflowY: {snapshot.overflowY.toFixed(0)}</p>
          </div>
        </div>

        {snapshot.suspects.length > 0 ? (
          <div className="mt-2">
            <p className="text-[11px] font-medium text-foreground">Suspeitos (top):</p>
            <ul className="mt-1 space-y-1 text-[11px] text-muted-foreground">
              {snapshot.suspects.slice(0, 4).map((s) => (
                <li key={s.selector} className="font-mono break-words">
                  {s.selector} — x:{s.overflowX.toFixed(0)} y:{s.overflowY.toFixed(0)}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-2 text-[11px] text-muted-foreground">Sem overflow detectado neste instante.</p>
        )}
      </div>
    </div>
  );
}
