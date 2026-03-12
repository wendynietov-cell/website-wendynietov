"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

const C = {
  purple: "#b44fdf",  pA: "rgba(180,79,223,",
  pink:   "#e040a0",  pkA: "rgba(224,64,160,",
  teal:   "#5effd8",  tA: "rgba(94,255,216,",
  indigo: "#a5b4fc",  iA: "rgba(165,180,252,",
  bg:     "#06060f",
};

const schema = z.object({
  name:    z.string().min(2, "Nombre muy corto"),
  email:   z.string().email("Email inválido"),
  message: z.string().min(10, "Mensaje muy corto"),
});

type FormData   = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

function InputField({
  label, value, onChange, type = "text", placeholder, error,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[9px] tracking-[.13em] uppercase"
        style={{ color: "rgba(180,79,223,.5)" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm font-light text-white/75 placeholder:text-white/18 bg-transparent outline-none px-4 py-3 rounded-xl transition-all duration-200"
        style={{
          border: `1px solid ${error ? "rgba(224,64,160,.4)" : "rgba(180,79,223,.15)"}`,
          background: "rgba(180,79,223,.022)",
        }}
        onFocus={e => { e.currentTarget.style.borderColor = "rgba(180,79,223,.4)"; }}
        onBlur={e =>  { e.currentTarget.style.borderColor = error ? "rgba(224,64,160,.4)" : "rgba(180,79,223,.15)"; }}
      />
      {error && (
        <span className="font-mono text-[9px] tracking-[.08em]" style={{ color: "rgba(224,64,160,.8)" }}>
          {error}
        </span>
      )}
    </div>
  );
}

interface ContactFormProps {
  fadeUp: (delay?: number) => any;
}

export default function ContactForm({ fadeUp }: ContactFormProps) {
  const [submitted, setSubmitted]     = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm]               = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors]           = useState<FormErrors>({});

  const set = (k: keyof FormData) => (v: string) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: FormErrors = {};
      result.error.errors.forEach(err => { fe[err.path[0] as keyof FormData] = err.message; });
      setErrors(fe); return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div {...fadeUp(0.1)} className="flex flex-col gap-5">
      <div className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(180,79,223,.014)",
          border: "1px solid rgba(180,79,223,.11)",
          backdropFilter: "blur(24px) saturate(1.4)",
        }}>
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg,transparent,#b44fdf 50%,transparent)", opacity: .25 }} />

        <div className="p-7">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="p-4 rounded-2xl" style={{ background: "rgba(94,255,216,.07)", border: "1px solid rgba(94,255,216,.2)" }}>
                <CheckCircle2 size={28} style={{ color: C.teal }} />
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-[.13em] uppercase mb-2"
                  style={{ color: "rgba(94,255,216,.6)" }}>Mensaje recibido</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#fff", fontStyle: "italic" }}>
                  ¡Gracias por escribir!
                </h3>
                <p className="text-white/38 text-sm font-light mt-1">Te respondo en menos de 24 h.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Nombre" value={form.name}    onChange={set("name")}    placeholder="Tu nombre"    error={errors.name} />
                <InputField label="Email"  value={form.email}   onChange={set("email")}   placeholder="tu@email.com" error={errors.email} type="email" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[9px] tracking-[.13em] uppercase"
                  style={{ color: "rgba(180,79,223,.5)" }}>Mensaje</label>
                <textarea
                  value={form.message}
                  onChange={e => set("message")(e.target.value)}
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o desafío..."
                  className="w-full text-sm font-light text-white/75 placeholder:text-white/18 bg-transparent px-4 py-3 rounded-xl resize-none transition-all duration-200"
                  style={{
                    border: `1px solid ${errors.message ? "rgba(224,64,160,.4)" : "rgba(180,79,223,.15)"}`,
                    background: "rgba(180,79,223,.022)",
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(180,79,223,.4)"; }}
                  onBlur={e =>  { e.currentTarget.style.borderColor = errors.message ? "rgba(224,64,160,.4)" : "rgba(180,79,223,.15)"; }}
                />
                {errors.message && (
                  <span className="font-mono text-[9px] tracking-[.08em]" style={{ color: "rgba(224,64,160,.8)" }}>
                    {errors.message}
                  </span>
                )}
              </div>
              <button type="submit" disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-[.1em] uppercase py-3.5 text-white transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                style={{
                  background: "linear-gradient(135deg,#b44fdf,#e040a0)",
                  clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
                  boxShadow: "0 5px 20px rgba(180,79,223,.22)",
                }}>
                {isSubmitting
                  ? <Loader2 size={14} className="animate-spin" />
                  : <><span>Enviar mensaje</span><ArrowRight size={13} /></>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
