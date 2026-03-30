import { useState } from "react";
import emailjs from "@emailjs/browser";
import type { Tokens } from "../utils/useTheme";

// ─── Credenciales de EmailJS ────────────────────────────────────────────────
// Regístrate gratis en https://www.emailjs.com/ y reemplaza estos valores,
// o defínelos en un archivo .env como VITE_EMAILJS_SERVICE_ID, etc.
const SERVICE_ID  = "service_ywxczys";
const TEMPLATE_ID = "template_wv6d8vr";
const PUBLIC_KEY  = "JjE5LDOZWo5y77Mty";
// ────────────────────────────────────────────────────────────────────────────

interface Props {
  isOpen: boolean;
  onClose: () => void;
  tk: Tokens;
}

const INITIAL = { nombre: "", telefono: "", correo: "", nic: "", tipo: "Residencial", mensaje: "" };

export function QuoteModal({ isOpen, onClose, tk }: Props) {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          nombre:    form.nombre,
          telefono:  form.telefono,
          correo:    form.correo || "No proporcionado",
          nic:       form.nic,
          tipo:      form.tipo,
          mensaje:   form.mensaje || "Sin mensaje adicional",
          to_email:  "ingeniero2@greenglo.com.co",
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setForm(INITIAL);
      }, 2800);
    } catch (err) {
      console.error("Error completo de Email", err);
      setStatus("error");
    }
  };

  const inputClass = `mt-1 w-full rounded-xl border ${tk.inputField} ${tk.textPrimary} px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-colors`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Fondo oscuro */}
      <div className={`absolute inset-0 ${tk.modalOverlay} backdrop-blur-sm`} />

      {/* Panel del formulario */}
      <div
        className={`relative w-full max-w-md rounded-2xl border ${tk.cardSolid} p-6 shadow-2xl max-h-[90vh] overflow-y-auto`}
        onClick={e => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className={`text-lg font-semibold ${tk.textPrimary}`}>Cotización Gratis</h2>
            <p className={`text-xs mt-0.5 ${tk.textMuted}`}>Respuesta en menos de 24 horas</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className={`w-8 h-8 rounded-full border flex items-center justify-center text-lg leading-none ${tk.linkNormal} ${tk.textMuted} hover:opacity-80 transition-opacity`}
          >
            ×
          </button>
        </div>

        {/* Estado de éxito */}
        {status === "success" ? (
          <div className="text-center py-10">
            <div className="text-5xl mb-4">✅</div>
            <p className={`font-semibold text-base ${tk.textPrimary}`}>¡Solicitud enviada!</p>
            <p className={`text-sm mt-1 ${tk.textMuted}`}>
              Nos contactaremos contigo muy pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">

            {/* Nombre */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                Nombre completo <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Ej: Carlos Pérez"
                className={inputClass}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                Teléfono <span className="text-green-500">*</span>
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
                placeholder="Ej: 300 123 4567"
                className={inputClass}
              />
            </div>

            {/* Correo */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                Correo electrónico
              </label>
              <input
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="Ej: carlos@correo.com"
                className={inputClass}
              />
            </div>

            {/* NIC */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                NIC de la factura <span className="text-green-500">*</span>
              </label>
              <input
                type="text"
                name="nic"
                value={form.nic}
                onChange={handleChange}
                required
                placeholder="Número en tu factura de energía"
                className={inputClass}
              />
              <p className={`text-xs mt-1 ${tk.textMuted}`}>
                El NIC aparece en la parte superior de tu factura de energía eléctrica.
              </p>
            </div>

            {/* Tipo de instalación */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                Tipo de instalación <span className="text-green-500">*</span>
              </label>
              <select
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Residencial</option>
                <option>Comercial</option>
                <option>Industrial</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className={`text-xs font-medium ${tk.textSecondary}`}>
                Mensaje adicional
              </label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={3}
                placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="text-red-400 text-xs bg-red-400/10 rounded-lg px-3 py-2">
                Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.
              </p>
            )}

            {/* Botón enviar */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-xl text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60 mt-1"
            >
              {status === "sending" ? "Enviando…" : "Enviar solicitud"}
            </button>

            <p className={`text-center text-xs ${tk.textMuted}`}>
              * Campos obligatorios
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
