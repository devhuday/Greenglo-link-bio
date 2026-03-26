/* ─────────────────────────────────────────────────────────────────────
   Todos los datos de contenido de la página.
   Edita aquí para cambiar textos, URLs, imágenes y links.
───────────────────────────────────────────────────────────────────── */
import {
  SunIcon, PhoneIcon, MapIcon, CalendarIcon, WhatsAppIcon,
  FacebookIcon, InstagramIcon, YoutubeIcon, GlobeIcon,
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
  {
    id: 2,
    label: "WhatsApp Directo",
    sublabel: "+57 300 000 0000",
    icon: <WhatsAppIcon />,
    accent: "",
    featured: false,
    href: "#",
  },
  {
    id: 3,
    label: "Agendar Visita Técnica",
    sublabel: "Evaluación sin costo",
    icon: <CalendarIcon />,
    accent: "",
    featured: false,
    href: "#",
  },
  {
    id: 4,
    label: "Nuestros Proyectos",
    sublabel: "Instalaciones realizadas",
    icon: <MapIcon />,
    accent: "",
    featured: false,
    href: "#",
  },
  {
    id: 5,
    label: "Llámanos Ahora",
    sublabel: "Lunes a Sábado 8am - 6pm",
    icon: <PhoneIcon />,
    accent: "",
    featured: false,
    href: "#",
  },
];

/* ── Redes sociales ───────────────────────────────────────────────── */
export const socials = [
  {
    icon: <FacebookIcon />,
    href: "#",
    label: "Facebook",
    color: "text-[#1877F2]",
    ring: "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10",
  },
  {
    icon: <InstagramIcon />,
    href: "#",
    label: "Instagram",
    color: "text-[#C13584]",
    ring: "hover:border-[#C13584]/40 hover:bg-[#C13584]/10",
  },
  {
    icon: <YoutubeIcon />,
    href: "#",
    label: "YouTube",
    color: "text-[#FF0000]",
    ring: "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10",
  },
  {
    icon: <WhatsAppIcon />,
    href: "#",
    label: "WhatsApp",
    color: "text-[#25D366]",
    ring: "hover:border-[#25D366]/40 hover:bg-[#25D366]/10",
  },
  {
    icon: <GlobeIcon />,
    href: "#", // 👈 reemplaza con la URL de tu sitio web
    label: "Sitio web",
    color: "text-sky-400",
    ring: "hover:border-sky-400/40 hover:bg-sky-400/10",
  },
];

/* ── Estadísticas ─────────────────────────────────────────────────── */
export const stats = [
  { value: "500+", label: "Instalaciones" },
  { value: "15MW", label: "Capacidad instalada" },
  { value: "98%",  label: "Satisfacción" },
];

/* ── Galería de proyectos ─────────────────────────────────────────────
   Reemplaza las URLs con las de tu Supabase:
   https://<proyecto>.supabase.co/storage/v1/object/public/<bucket>/<archivo>
───────────────────────────────────────────────────────────────────── */
export type Category = "Residencial" | "Comercial" | "Industrial";

export const CATEGORIES: Category[] = ["Residencial", "Comercial", "Industrial"];

export const categoryEmoji: Record<Category, string> = {
  Residencial: "🏠",
  Comercial:   "🏢",
  Industrial:  "🏭",
};

export const gallery: Record<Category, { url: string; label: string }[]> = {
  Residencial: [
    { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80", label: "Casa unifamiliar · Bogotá" },
    { url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80", label: "Residencia · Medellín" },
    { url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80", label: "Finca · Cundinamarca" },
    { url: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80", label: "Casa campestre · Antioquia" },
  ],
  Comercial: [
    { url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80", label: "Edificio corporativo · Bogotá" },
    { url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80", label: "Centro comercial · Cali" },
    { url: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80", label: "Hotel · Cartagena" },
    { url: "https://images.unsplash.com/photo-1584276433295-4c3b9cdb5e8d?w=600&q=80", label: "Restaurante · Barranquilla" },
  ],
  Industrial: [
    { url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=80", label: "Planta manufacturera · Medellín" },
    { url: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80", label: "Bodega logística · Bogotá" },
    { url: "https://images.unsplash.com/photo-1615829386703-e2e87ba44b90?w=600&q=80", label: "Granja solar · Llanos" },
    { url: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=600&q=80", label: "Parque fotovoltaico · Boyacá" },
  ],
};
