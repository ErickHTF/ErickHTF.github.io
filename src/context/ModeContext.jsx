import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext(null);

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (typeof window === "undefined") return "tech";
    try { return localStorage.getItem("mode") || "tech"; }
    catch { return "tech"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    try { localStorage.setItem("mode", mode); } catch {}
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
