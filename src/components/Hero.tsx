import { MoonIcon, SunToggleIcon } from "./icons";
import type { Tokens } from "../utils/useTheme";

interface Props {
  loaded: boolean;
  isDark: boolean;
  toggle: () => void;
  tk: Tokens;
}

export function Hero({ loaded, isDark, toggle, tk }: Props) {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-7">
      {/* Imagen de fondo */}
      <img
        src="https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/worker_greenglo.webp"
        alt="Paneles solares GreenGlo"
        className="w-full h-80 object-cover object-center"
      />

      {/* Gradiente: imagen arriba → color del tema abajo */}
      <div className={`absolute inset-0 bg-linear-to-t ${tk.heroGradient} via-white/10 to-transparent`} />
      <div className={`absolute inset-0 bg-linear-to-b from-white/5 via-transparent ${tk.heroGradient}`} />

      {/* Botón toggle oscuro / claro */}
      <div className="absolute top-4 left-4">
        <button
          onClick={toggle}
          aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          className={`w-8 h-8 rounded-full border flex items-center justify-center backdrop-blur-sm transition-all duration-200 ${tk.toggleBtn}`}
        >
          {isDark ? <SunToggleIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* Badge "En línea" */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-green-400 block" />
          En línea ahora
        </span>
      </div>

      {/* Logo y descripción sobre la imagen */}
      <div
        className={`fade-up ${loaded ? "loaded" : ""} absolute bottom-0 inset-x-0 flex flex-col items-center pb-6 px-4`}
        style={{ transitionDelay: "80ms" }}
      >
        <img
          src={`${tk.logoUrl}`}
          alt="GreenGlo"
          className="w-72 object-contain mb-2 drop-shadow-2xl"
        />
        <p className={`${tk.text} text-sm leading-relaxed text-center max-w-xs`}>
          Instalamos sistemas solares para hogares y empresas en Colombia 🇨🇴
        </p>
      </div>
    </div>
  );
}
