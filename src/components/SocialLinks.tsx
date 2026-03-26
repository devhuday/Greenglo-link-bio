import { socials } from "../data/pageData";
import type { Tokens } from "../utils/useTheme";

interface Props {
  loaded: boolean;
  tk: Tokens;
}

export function SocialLinks({ loaded, tk }: Props) {
  return (
    <div
      className={`fade-up ${loaded ? "loaded" : ""} flex justify-center gap-2.5 mb-7`}
      style={{ transitionDelay: "160ms" }}
    >
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.href}
          aria-label={s.label}
          className={`w-10 h-10 rounded-xl border flex items-center justify-center ${tk.socialBg} ${s.color} ${s.ring} transition-all duration-200 hover:-translate-y-0.5`}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
