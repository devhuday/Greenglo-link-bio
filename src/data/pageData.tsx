/* ─────────────────────────────────────────────────────────────────────
   Todos los datos de contenido de la página.
   Edita aquí para cambiar textos, URLs, imágenes y links.
───────────────────────────────────────────────────────────────────── */
import {
  SunIcon, WhatsAppIcon,
  FacebookIcon, InstagramIcon, GlobeIcon,
} from "../components/icons";

/* ── Links de acción ──────────────────────────────────────────────── */
export const links = [
  {
    id: 1,
    label: "Solicitar Cotización Gratis",
    sublabel: "Respuesta en menos de 24hrs",
    icon: <SunIcon />,
    accent: "from-green-500 to-emerald-600",
    featured: true,
    href: "#",
  },
];

/* ── Redes sociales ───────────────────────────────────────────────── */
export const socials = [
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/greenglosas/",
    label: "Facebook",
    color: "text-[#1877F2]",
    ring: "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/greenglosas/",
    label: "Instagram",
    color: "text-[#C13584]",
    ring: "hover:border-[#C13584]/40 hover:bg-[#C13584]/10",
  },
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/573001234567",
    label: "WhatsApp",
    color: "text-[#25D366]",
    ring: "hover:border-[#25D366]/40 hover:bg-[#25D366]/10",
  },
  {
    icon: <GlobeIcon />,
    href: "https://cotiza.greenglo.com.co", // 👈 reemplaza con la URL de tu sitio web
    label: "Sitio web",
    color: "text-sky-400",
    ring: "hover:border-sky-400/40 hover:bg-sky-400/10",
  },
];

/* ── Estadísticas ─────────────────────────────────────────────────── */
export const stats = [
  { value: "+100", label: "Instalaciones" },
  { value: "+1MW", label: "Capacidad instalada" },
  { value: "100%",  label: "Satisfacción" },
];

/* ── Galería de proyectos ─────────────────────────────────────────────
   Reemplaza las URLs con las de tu Supabase:
   https://<proyecto>.supabase.co/storage/v1/object/public/<bucket>/<archivo>
───────────────────────────────────────────────────────────────────── */
export type Category = "Residencial" | "Comercial" | "Industrial";

export const CATEGORIES: Category[] = ["Residencial", "Comercial", "Industrial"];

export const categoryEmoji: Record<Category, string> = {
  Residencial: "",
  Comercial:   "",
  Industrial:  "",
};

export const gallery: Record<Category, { url: string; label: string }[]> = {
  Residencial: [
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/DJI_20251024161539_0142_D%20(4).webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/Heroimagen.webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/carrusel_5.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/rosiris_1.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/project-carlos.webp", label: "" },
  ],
  Comercial: [
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/solap_1.webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/PlantaCigma.webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/project-tayrona-01.webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/carrusel_6.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/carrusel_9.jpg", label: "" },
  ],
  Industrial: [
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/chivolo_1.webp", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/eldificil_1.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/welcomebg.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/sitioNuevo_01.jpg", label: "" },
    { url: "https://luereyyaepjejecuttgb.supabase.co/storage/v1/object/public/Landing-Photos/buenavista-01.jpg", label: "" },
  ],
};
