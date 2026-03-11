"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, Save, CheckCircle, ChevronDown, ChevronUp, Loader2, KeyRound, Eye, EyeOff } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface HeroContent {
  name: string;
  subtitle: string;
  description: string;
  stat1_value: string;
  stat1_label: string;
  stat2_value: string;
  stat2_label: string;
  badge: string;
  cta_primary: string;
  cta_secondary: string;
}

interface ServiceItem {
  title: string;
  shortDesc: string;
  problem: string;
  solution: string;
}

interface TestimonialItem {
  author: string;
  role: string;
  quote: string;
}

interface ContactContent {
  email: string;
  whatsapp: string;
  linkedin: string;
  twitter: string;
}

type SectionKey = "hero" | "services" | "testimonials" | "contact";

// ── Default content ──────────────────────────────────────────────────────────

const DEFAULTS = {
  hero: {
    name: "WENDY NIETO",
    subtitle: "Estratega de Plataformas y Crecimiento Tech",
    description: "Ayudo a restaurantes, hoteles, cocinas ocultas y e-commerces a multiplicar sus ingresos con estrategias de ventas basadas en datos y tecnología.",
    stat1_value: "+15",
    stat1_label: "Proyectos",
    stat2_value: "5 años",
    stat2_label: "Ecosistema LatAm",
    badge: "Disponible para proyectos",
    cta_primary: "Ver servicios",
    cta_secondary: "Agendar consultoría",
  } as HeroContent,
  services: [
    { title: "Tecnología para Restaurantes", shortDesc: "Sistemas POS, integraciones de delivery y optimización de operaciones gastronómicas.", problem: "", solution: "" },
    { title: "Estrategia de Plataformas", shortDesc: "Escalabilidad, retención y marketplaces para startups de alto crecimiento.", problem: "", solution: "" },
    { title: "Cocinas Ocultas (Ghost Kitchens)", shortDesc: "Despliegue operativo y tecnológico para marcas virtuales multicanal.", problem: "", solution: "" },
    { title: "Economía Creativa", shortDesc: "Sistemas de monetización y distribución para creadores UGC.", problem: "", solution: "" },
  ] as ServiceItem[],
  testimonials: [
    { author: "Roberto García", role: "CEO de GhostKitchens MX", quote: "Pasamos de 5 a 50 marcas virtuales sin quebrar la infraestructura." },
    { author: "Ana Martínez", role: "Head of Operations, Rappi Colombia", quote: "Redujimos el tiempo de entrega promedio en 12%." },
    { author: "Carlos Ruiz", role: "Co-founder, StartUp Tech LATAM", quote: "Nos ayudó a escalar de 100k a 5M USD en GMV." },
  ] as TestimonialItem[],
  contact: {
    email: "wendy@wendynieto.com",
    whatsapp: "+52 55 0000 0000",
    linkedin: "https://linkedin.com/in/wendynieto",
    twitter: "https://twitter.com/wendynieto",
  } as ContactContent,
};

// ── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children, onSave, saving, saved }: {
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white/3 hover:bg-white/5 transition-colors"
      >
        <span className="font-bold text-white">{title}</span>
        {open ? <ChevronUp size={18} className="text-white/40" /> : <ChevronDown size={18} className="text-white/40" />}
      </button>

      {open && (
        <div className="px-6 pb-6 pt-4 space-y-4">
          {children}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onSave}
              disabled={saving}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50"
            >
              {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
              {saving ? "Guardando..." : "Guardar cambios"}
            </button>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm">
                <CheckCircle size={15} /> Guardado
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Field helpers ────────────────────────────────────────────────────────────

function Field({ label, value, onChange, textarea = false }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const cls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all resize-none";
  return (
    <div>
      <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">{label}</label>
      {textarea
        ? <textarea rows={3} value={value} onChange={e => onChange(e.target.value)} className={cls} />
        : <input type="text" value={value} onChange={e => onChange(e.target.value)} className={cls} />
      }
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const [hero, setHero] = useState<HeroContent>(DEFAULTS.hero);
  const [services, setServices] = useState<ServiceItem[]>(DEFAULTS.services);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULTS.testimonials);
  const [contact, setContact] = useState<ContactContent>(DEFAULTS.contact);

  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});

  // Change password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdMessage, setPwdMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // ── Load from DB ────────────────────────────────────────────────────────────

  const load = useCallback(async () => {
    const { data } = await supabase.from("site_content").select("*");
    if (data) {
      data.forEach((row: { section: SectionKey; data: unknown }) => {
        if (row.section === "hero") setHero(row.data as HeroContent);
        if (row.section === "services") setServices(row.data as ServiceItem[]);
        if (row.section === "testimonials") setTestimonials(row.data as TestimonialItem[]);
        if (row.section === "contact") setContact(row.data as ContactContent);
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  // ── Save to DB ──────────────────────────────────────────────────────────────

  async function save(section: SectionKey, data: unknown) {
    setSaving(s => ({ ...s, [section]: true }));
    setSaved(s => ({ ...s, [section]: false }));

    await supabase.from("site_content").upsert(
      { section, data, updated_at: new Date().toISOString() },
      { onConflict: "section" }
    );

    setSaving(s => ({ ...s, [section]: false }));
    setSaved(s => ({ ...s, [section]: true }));
    setTimeout(() => setSaved(s => ({ ...s, [section]: false })), 3000);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault();
    setPwdMessage(null);
    if (newPassword !== confirmPassword) {
      setPwdMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }
    if (newPassword.length < 6) {
      setPwdMessage({ type: "error", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }
    setPwdLoading(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setPwdMessage({ type: "error", text: "Error al cambiar la contraseña. Intenta de nuevo." });
    } else {
      setPwdMessage({ type: "success", text: "¡Contraseña actualizada correctamente!" });
      setNewPassword("");
      setConfirmPassword("");
    }
    setPwdLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050d1a]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-black text-lg bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
            Wendy Nieto
          </span>
          <span className="text-white/30 text-sm ml-3 font-mono">Portal Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
        >
          <LogOut size={16} />
          Cerrar sesión
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <div>
          <h1 className="text-2xl font-black text-white">Editor de contenido</h1>
          <p className="text-white/40 text-sm mt-1">Los cambios se reflejan en tu sitio web al instante.</p>
        </div>

        {/* ── Hero ── */}
        <Section
          title="Portada (Hero)"
          onSave={() => save("hero", hero)}
          saving={!!saving.hero}
          saved={!!saved.hero}
        >
          <Field label="Nombre" value={hero.name} onChange={v => setHero(h => ({ ...h, name: v }))} />
          <Field label="Subtítulo" value={hero.subtitle} onChange={v => setHero(h => ({ ...h, subtitle: v }))} />
          <Field label="Descripción" value={hero.description} onChange={v => setHero(h => ({ ...h, description: v }))} textarea />
          <Field label="Badge (estado)" value={hero.badge} onChange={v => setHero(h => ({ ...h, badge: v }))} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Stat 1 — Valor" value={hero.stat1_value} onChange={v => setHero(h => ({ ...h, stat1_value: v }))} />
            <Field label="Stat 1 — Etiqueta" value={hero.stat1_label} onChange={v => setHero(h => ({ ...h, stat1_label: v }))} />
            <Field label="Stat 2 — Valor" value={hero.stat2_value} onChange={v => setHero(h => ({ ...h, stat2_value: v }))} />
            <Field label="Stat 2 — Etiqueta" value={hero.stat2_label} onChange={v => setHero(h => ({ ...h, stat2_label: v }))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Botón primario" value={hero.cta_primary} onChange={v => setHero(h => ({ ...h, cta_primary: v }))} />
            <Field label="Botón secundario" value={hero.cta_secondary} onChange={v => setHero(h => ({ ...h, cta_secondary: v }))} />
          </div>
        </Section>

        {/* ── Services ── */}
        <Section
          title="Servicios"
          onSave={() => save("services", services)}
          saving={!!saving.services}
          saved={!!saved.services}
        >
          {services.map((svc, i) => (
            <div key={i} className="border border-white/8 rounded-xl p-4 space-y-3">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest">Servicio {i + 1}</p>
              <Field label="Título" value={svc.title} onChange={v => setServices(s => s.map((x, j) => j === i ? { ...x, title: v } : x))} />
              <Field label="Descripción corta" value={svc.shortDesc} onChange={v => setServices(s => s.map((x, j) => j === i ? { ...x, shortDesc: v } : x))} textarea />
              <Field label="Problema" value={svc.problem} onChange={v => setServices(s => s.map((x, j) => j === i ? { ...x, problem: v } : x))} textarea />
              <Field label="Solución" value={svc.solution} onChange={v => setServices(s => s.map((x, j) => j === i ? { ...x, solution: v } : x))} textarea />
            </div>
          ))}
        </Section>

        {/* ── Testimonials ── */}
        <Section
          title="Testimonios"
          onSave={() => save("testimonials", testimonials)}
          saving={!!saving.testimonials}
          saved={!!saved.testimonials}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="border border-white/8 rounded-xl p-4 space-y-3">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest">Testimonio {i + 1}</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Nombre" value={t.author} onChange={v => setTestimonials(s => s.map((x, j) => j === i ? { ...x, author: v } : x))} />
                <Field label="Cargo" value={t.role} onChange={v => setTestimonials(s => s.map((x, j) => j === i ? { ...x, role: v } : x))} />
              </div>
              <Field label="Cita" value={t.quote} onChange={v => setTestimonials(s => s.map((x, j) => j === i ? { ...x, quote: v } : x))} textarea />
            </div>
          ))}
        </Section>

        {/* ── Contact ── */}
        <Section
          title="Contacto y Redes"
          onSave={() => save("contact", contact)}
          saving={!!saving.contact}
          saved={!!saved.contact}
        >
          <Field label="Email" value={contact.email} onChange={v => setContact(c => ({ ...c, email: v }))} />
          <Field label="WhatsApp" value={contact.whatsapp} onChange={v => setContact(c => ({ ...c, whatsapp: v }))} />
          <Field label="LinkedIn (URL)" value={contact.linkedin} onChange={v => setContact(c => ({ ...c, linkedin: v }))} />
          <Field label="Twitter (URL)" value={contact.twitter} onChange={v => setContact(c => ({ ...c, twitter: v }))} />
        </Section>

        {/* ── Change password ── */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-5 bg-white/3">
            <KeyRound size={16} className="text-white/50" />
            <span className="font-bold text-white">Cambiar contraseña</span>
          </div>
          <form onSubmit={handleChangePassword} className="px-6 pb-6 pt-4 space-y-4">
            <div>
              <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Nueva contraseña
              </label>
              <div className="relative">
                <input
                  type={showNewPwd ? "text" : "password"}
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPwd(!showNewPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showNewPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Confirmar contraseña
              </label>
              <div className="relative">
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white text-sm placeholder-white/25 focus:outline-none focus:border-purple-500/60 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showConfirmPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {pwdMessage && (
              <p className={`text-sm rounded-lg px-4 py-3 border ${
                pwdMessage.type === "success"
                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  : "text-rose-400 bg-rose-500/10 border-rose-500/20"
              }`}>
                {pwdMessage.text}
              </p>
            )}

            <button
              type="submit"
              disabled={pwdLoading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50"
            >
              {pwdLoading ? <Loader2 size={15} className="animate-spin" /> : <KeyRound size={15} />}
              {pwdLoading ? "Actualizando..." : "Actualizar contraseña"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
