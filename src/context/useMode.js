import { useContext } from "react";
import { ModeContext } from "./ModeContext";

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode precisa estar dentro de <ModeProvider>");
  return ctx;
}
