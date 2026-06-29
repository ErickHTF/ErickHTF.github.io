import { useMode } from "../../context/useMode";
import { content, pick } from "../../content";

export default function Footer() {
  const { mode } = useMode();
  return <footer>{pick(content.footer, mode)}</footer>;
}
