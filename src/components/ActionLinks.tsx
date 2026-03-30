import { links } from "../data/pageData";
import { ChevronRight } from "./icons";
import type { Tokens } from "../utils/useTheme";

interface Props {
  loaded: boolean;
  tk: Tokens;
  onQuoteClick: () => void;
}

export function ActionLinks({ loaded, tk, onQuoteClick }: Props) {
  return (
    <div
      className={`fade-up ${loaded ? "loaded" : ""} mb-4`}
      style={{ transitionDelay: "400ms" }}
    >
      {/* Divisor */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex-1 h-px ${tk.divider}`} />
        <span className={`text-xs uppercase tracking-widest font-medium ${tk.dividerLabel}`}>
          Contacto
        </span>
        <div className={`flex-1 h-px ${tk.divider}`} />
      </div>

      <div className="space-y-2.5">
        {links.map((link, i) => (
          <div
            key={link.id}
            className="fade-up loaded"
            style={{ transitionDelay: `${420 + i * 60}ms` }}
          >
            {link.featured ? (
              <button
                type="button"
                onClick={onQuoteClick}
                className={`link-card w-full text-left relative overflow-hidden rounded-2xl border border-green-500/30 bg-gradient-to-r ${link.accent} transition-all duration-200`}
              >
                <div className="shimmer absolute inset-0 pointer-events-none" />
                <div className="flex items-center gap-3.5 px-4 py-3.5">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-white/20 text-white">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-white">{link.label}</div>
                    {link.sublabel && (
                      <div className="text-xs mt-0.5 text-white/65">{link.sublabel}</div>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-white/70">
                    <ChevronRight />
                  </div>
                </div>
              </button>
            ) : (
              <a
                href={link.href}
                className={`link-card block relative overflow-hidden rounded-2xl border ${tk.linkNormal} transition-all duration-200`}
              >
                <div className="flex items-center gap-3.5 px-4 py-3.5">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${tk.linkIconBg}`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium text-sm ${tk.linkText}`}>{link.label}</div>
                    {link.sublabel && (
                      <div className={`text-xs mt-0.5 ${tk.linkSubtext}`}>{link.sublabel}</div>
                    )}
                  </div>
                  <div className={`flex-shrink-0 ${tk.textMuted}`}>
                    <ChevronRight />
                  </div>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
