import { useLocation } from "react-router-dom";
import OverflowDebug from "@/components/debug/OverflowDebug";

export default function OverflowDebugGate() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const enabled = location.pathname === "/" && params.get("debugOverflow") === "1";

  return enabled ? <OverflowDebug /> : null;
}
