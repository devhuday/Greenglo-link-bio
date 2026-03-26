import { useState } from "react";
import { gallery, CATEGORIES, categoryEmoji, type Category } from "../data/pageData";
import { ZoomIcon } from "./icons";
import type { Tokens } from "../utils/useTheme";

interface Props {
  loaded: boolean;
  tk: Tokens;
}

export function Gallery({ loaded, tk }: Props) {
  const [activeTab, setActiveTab] = useState<Category>("Residencial");
  const [lightbox, setLightbox] = useState<{ url: string; label: string } | null>(null);

  return (
    <>
      <div
        className={`fade-up ${loaded ? "loaded" : ""} mb-7`}
        style={{ transitionDelay: "320ms" }}
      >
        {/* Divisor */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex-1 h-px ${tk.divider}`} />
          <span className={`text-xs uppercase tracking-widest font-medium ${tk.dividerLabel}`}>
            Proyectos
          </span>
          <div className={`flex-1 h-px ${tk.divider}`} />
        </div>

        {/* Tabs de categoría */}
        <div className={`flex gap-2 mb-4 p-1 border rounded-2xl transition-colors duration-300 ${tk.tabContainer}`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === cat
                  ? "bg-linear-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-900/40"
                  : tk.tabInactive
              }`}
            >
              <span>{categoryEmoji[cat]}</span>
              <span className="hidden sm:inline">{cat}</span>
              <span className="sm:hidden">{cat.slice(0, 5)}</span>
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 gap-2.5">
          {gallery[activeTab].map((img, i) => (
            <div
              key={`${activeTab}-${i}`}
              onClick={() => setLightbox(img)}
              className={`gallery-tile relative rounded-2xl overflow-hidden cursor-pointer ring-1 ring-white/5 ${
                i === 0 ? "col-span-2 aspect-video" : "aspect-square"
              }`}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 hover:opacity-90 transition-opacity duration-300" />

              {/* Ícono zoom */}
              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 opacity-0 hover-show transition-opacity duration-200">
                <ZoomIcon />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-medium leading-snug">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            ✕
          </button>
          <div
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.label}
              className="w-full h-auto max-h-[75vh] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-white font-semibold text-sm">{lightbox.label}</p>
              <p className="text-gray-400 text-xs mt-0.5">Toca fuera para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
