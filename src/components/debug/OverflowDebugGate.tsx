import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import OverflowDebug from "@/components/debug/OverflowDebug";

const STORAGE_KEY = "debugOverflow";

export default function OverflowDebugGate() {
  const location = useLocation();

  const hasParam = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("debugOverflow") === "1";
  }, [location.search]);

  const [enabled, setEnabled] = useState(() => {
    try {
      return hasParam || window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return hasParam;
    }
  });

  // Enable via query param and then remove it from the URL (so you can navigate normally)
  useEffect(() => {
    if (!hasParam) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }

    const params = new URLSearchParams(location.search);
    params.delete("debugOverflow");
    const nextSearch = params.toString();

    window.history.replaceState(
      {},
      "",
      `${location.pathname}${nextSearch ? `?${nextSearch}` : ""}${location.hash || ""}`
    );

    setEnabled(true);
  }, [hasParam, location.hash, location.pathname, location.search]);

  // Permanent toggle (Ctrl/Cmd + Shift + O)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isToggle = (e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "o";
      if (!isToggle) return;

      e.preventDefault();
      setEnabled((prev) => {
        const next = !prev;
        try {
          if (next) window.localStorage.setItem(STORAGE_KEY, "1");
          else window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        return next;
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!enabled) return null;

  return (
    <OverflowDebug
      onDisable={() => {
        try {
          window.localStorage.removeItem(STORAGE_KEY);
        } catch {
          // ignore
        }
        setEnabled(false);
      }}
    />
  );
}
