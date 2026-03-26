import { stats } from "../data/pageData";
import type { Tokens } from "../utils/useTheme";

interface Props {
  loaded: boolean;
  tk: Tokens;
}

export function Stats({ loaded, tk }: Props) {
  return (
    <div
      className={`fade-up ${loaded ? "loaded" : ""} grid grid-cols-3 gap-2.5 mb-7`}
      style={{ transitionDelay: "240ms" }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`relative border rounded-2xl p-3.5 text-center overflow-hidden transition-colors duration-300 ${tk.card}`}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
          <div className={`text-2xl font-bold font-display tracking-tight ${tk.statValue}`}>
            {s.value}
          </div>
          <div className={`text-xs mt-0.5 leading-tight ${tk.statLabel}`}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
