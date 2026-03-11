"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { AGENDA_SLOTS } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensaje muy corto"),
});

type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setIsSubmitting(false);
    if (res.ok) setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-24 md:pt-16 pb-24 px-6 md:px-16 md:mr-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-4">Contacto</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Hablemos de tu <span className="text-gradient">proyecto</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl">
            Primera consulta sin costo. Analizamos tu caso y te decimos si podemos ayudarte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 flex flex-col items-center text-center">
                <CheckCircle2 size={64} className="text-primary mb-6" />
                <h2 className="text-2xl font-bold mb-3">¡Mensaje recibido!</h2>
                <p className="text-white/60">Te contactaré en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Nombre</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.name && <p className="text-accent text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Mensaje</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-accent text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(21,245,186,0.4)] transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info + Agenda */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <a
                href="mailto:hello@arquitecto.com"
                className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Email</p>
                  <span className="font-medium">hello@arquitecto.com</span>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/70">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-0.5">Ubicación</p>
                  <span className="font-medium">LATAM · Remoto</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold mb-4">Slots disponibles esta semana</h3>
              <div className="space-y-2">
                {AGENDA_SLOTS.map((slot, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                      slot.available
                        ? "bg-primary/5 border border-primary/20 text-white"
                        : "bg-white/3 border border-white/5 text-white/30"
                    }`}
                  >
                    <span>{slot.time}</span>
                    <span className={`text-xs font-medium ${slot.available ? "text-primary" : "text-white/30"}`}>
                      {slot.available ? "Disponible" : "Ocupado"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
