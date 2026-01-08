import { useEffect, useMemo, useRef, useState } from "react";

type OverflowSuspect = {
  el: HTMLElement;
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

type OverflowDebugProps = {
  onDisable?: () => void;
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

export default function OverflowDebug({ onDisable }: OverflowDebugProps) {
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
        // Ignora o próprio painel do debug
        if (el.closest("[data-overflow-debug-root]")) continue;

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
            el,
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
        // Outline nos 2 principais para “bater o olho” (sem ambiguidade)
        for (const s of suspects.slice(0, 2)) {
          s.el.style.outline = "2px solid hsl(var(--destructive))";
          s.el.style.outlineOffset = "2px";
          outlinedRef.current.push(s.el);
        }
      }

      const now = Date.now();
      if (suspects.length && now - lastLogRef.current > 350) {
        lastLogRef.current = now;
        // eslint-disable-next-line no-console
        console.groupCollapsed(
          `[debugOverflow] overflowX=${overflowX.toFixed(0)} overflowY=${overflowY.toFixed(0)} | scrollW=${scrollWidth} clientW=${clientWidth} | scrollH=${scrollHeight} clientH=${clientHeight}`
        );
        // eslint-disable-next-line no-console
        console.table(
          suspects.map((s) => ({
            selector: s.selector,
            overflowX: s.overflowX.toFixed(0),
            overflowY: s.overflowY.toFixed(0),
            left: s.left.toFixed(0),
            right: s.right.toFixed(0),
            top: s.top.toFixed(0),
            bottom: s.bottom.toFixed(0),
          }))
        );
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

  const top = snapshot?.suspects?.[0];

  const topBox = useMemo(() => {
    if (!top) return null;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const left = Math.max(0, top.left);
    const topY = Math.max(0, top.top);
    const right = Math.min(vw, top.right);
    const bottom = Math.min(vh, top.bottom);

    return {
      left,
      top: topY,
      width: Math.max(0, right - left),
      height: Math.max(0, bottom - topY),
    };
  }, [top]);

  if (!snapshot) return null;

  return (
    <>
      {/* Highlight do culpado #1 */}
      {topBox ? (
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          <div
            className="absolute rounded-md border-2 border-destructive bg-destructive/10"
            style={{
              left: `${topBox.left}px`,
              top: `${topBox.top}px`,
              width: `${topBox.width}px`,
              height: `${topBox.height}px`,
            }}
          />
          <div
            className="absolute"
            style={{ left: `${topBox.left}px`, top: `${Math.max(0, topBox.top - 22)}px` }}
          >
            <div className="rounded-md border border-border bg-card/95 px-2 py-1 text-[11px] text-foreground shadow">
              <span className="font-mono">{top.selector}</span>
              <span className="ml-2 text-muted-foreground">
                x:{top.overflowX.toFixed(0)} y:{top.overflowY.toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Painel */}
      <div
        data-overflow-debug-root
        className="fixed bottom-3 left-3 z-[9999] w-[min(92vw,440px)] pointer-events-none"
      >
        <div className="pointer-events-auto rounded-lg border border-border bg-card/95 backdrop-blur p-3 shadow-lg">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-foreground">Debug Overflow</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                Toggle: <span className="font-mono">Ctrl/Cmd + Shift + O</span> (ou habilite via{" "}
                <span className="font-mono">?debugOverflow=1</span>).\n              </p>
            </div>

            <button
              type="button"
              onClick={() => onDisable?.()}
              className="shrink-0 rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium text-foreground hover:bg-muted"
            >
              Desativar
            </button>
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
                {snapshot.suspects.slice(0, 4).map((s, idx) => (
                  <li key={`${s.selector}-${idx}`} className="font-mono break-words">
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
    </>
  );
}
