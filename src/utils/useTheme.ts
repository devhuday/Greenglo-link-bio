import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'gg-theme';

/**
 * Detecta el modo de color del sistema (oscuro / claro) y permite
 * cambiarlo manualmente. La preferencia manual se persiste en localStorage.
 *
 * - Si el usuario nunca ha tocado el toggle → sigue al sistema.
 * - Si el usuario elige manualmente → respeta su elección.
 * - Si el sistema cambia y no hay preferencia manual → cambia automáticamente.
 */
/** Tipo de los tokens de color — úsalo en los props de los componentes */
export type Tokens = ReturnType<typeof themeTokens>;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Escucha cambios del sistema operativo
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      // Solo cambia automáticamente si el usuario no eligió manualmente
      if (!localStorage.getItem(STORAGE_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /** Alterna entre oscuro y claro y guarda la preferencia */
  const toggle = () => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return { theme, isDark: theme === 'dark', toggle };
}

/* ─── Tokens de color por tema ─────────────────────────────────────────
   Devuelve clases de Tailwind según el tema activo.
   Úsalos en App.tsx: const tk = themeTokens(isDark)
──────────────────────────────────────────────────────────────────────── */
export function themeTokens(isDark: boolean) {
  return isDark
    ? {
        page:          'bg-gray-950',
        heroGradient:  'gray-950',
        card:          'bg-gray-900/70 border-gray-800',
        cardSolid:     'bg-gray-900 border-gray-800',
        tabContainer:  'bg-gray-900/80 border-gray-800',
        tabInactive:   'text-gray-500 hover:text-gray-300',
        statValue:     'text-green-400',
        statLabel:     'text-gray-500',
        divider:       'bg-gray-800',
        dividerLabel:  'text-gray-500',
        textPrimary:   'text-gray-100',
        textSecondary: 'text-gray-300',
        textMuted:     'text-gray-500',
        linkNormal:    'border-gray-800 bg-gray-900/70 hover:border-gray-700 hover:bg-gray-900',
        linkIconBg:    'bg-gray-800 text-green-400',
        linkText:      'text-gray-100',
        linkSubtext:   'text-gray-500',
        socialBg:      'bg-gray-900 border-gray-800',
        footer:        'text-gray-700',
        toggleBtn:     'bg-black/30 border-white/10 text-white/70 hover:text-yellow-300 hover:border-yellow-400/30',
        ambientGlow:   'bg-green-500/5',
        text: "text-slate-200",
        gridOpacity:   'opacity-40',
      }
    : {
        page:          'bg-slate-100',
        heroGradient:  'slate-100',
        card:          'bg-white border-slate-200',
        cardSolid:     'bg-white border-slate-200',
        tabContainer:  'bg-white border-slate-200',
        tabInactive:   'text-slate-500 hover:text-slate-700',
        statValue:     'text-green-600',
        statLabel:     'text-slate-500',
        divider:       'bg-slate-300',
        dividerLabel:  'text-slate-400',
        textPrimary:   'text-slate-800',
        textSecondary: 'text-slate-600',
        textMuted:     'text-slate-400',
        linkNormal:    'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50',
        linkIconBg:    'bg-slate-100 text-green-600',
        linkText:      'text-slate-800',
        linkSubtext:   'text-slate-400',
        socialBg:      'bg-white border-slate-200',
        footer:        'text-slate-400',
        toggleBtn:     'bg-white/40 border-white/30 text-white/80 hover:text-slate-900 hover:border-white/60',
        ambientGlow:   'bg-green-400/1',
        text: "text-slate-600",
        gridOpacity:   'opacity-20',
      };
}
