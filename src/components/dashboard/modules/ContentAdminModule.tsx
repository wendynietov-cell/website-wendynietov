"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import {
  Save, CheckCircle, Loader2,
  FileText, MessageSquare, Phone, Home, Plus, Trash2, Globe, Search, RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface HeroContent {
  name: string; subtitle: string; description: string;
  stat1_value: string; stat1_label: string;
  stat2_value: string; stat2_label: string;
  badge: string; cta_primary: string; cta_secondary: string;
}
interface ServiceItem { title: string; shortDesc: string; problem: string; solution: string; }
interface TestimonialItem { author: string; role: string; quote: string; }
interface ContactContent { email: string; whatsapp: string; linkedin: string; twitter: string; }
type SiteData = { hero: HeroContent; services: ServiceItem[]; testimonials: TestimonialItem[]; contact: ContactContent; };

// --- Field Component (Refinado) ---
function Field({ label, value, onChange, textarea = false, placeholder = "" }: any) {
  return (
    <div className="flex flex-col gap-2 flex-1 group">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#7c3aed] transition-colors italic">
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl px-5 py-4 text-[13px] font-medium outline-none transition-all resize-none leading-relaxed bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-300 focus:border-[#7c3aed]/40 focus:bg-white dark:focus:bg-white/[0.08]"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl px-5 py-4 text-[13px] font-medium outline-none transition-all bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-300 focus:border-[#7c3aed]/40 focus:bg-white dark:focus:bg-white/[0.08]"
        />
      )}
    </div>
  );
}

const TABS = [
  { id: 'hero',         label: 'PORTADA',    icon: Home },
  { id: 'services',     label: 'SERVICIOS',  icon: FileText },
  { id: 'testimonials', label: 'CLIENTES',   icon: MessageSquare },
  { id: 'contact',      label: 'CONTACTO',   icon: Phone },
];

export default function ContentAdminModule() {
  const [activeTab, setActiveTab] = useState<keyof SiteData>('hero');
  const [loading, setLoading]     = useState(true);
  const [saving, setSaving]       = useState(false);
  const [saved, setSaved]         = useState(false);

  const [data, setData] = useState<SiteData>({
    hero: { name: "", subtitle: "", description: "", stat1_value: "", stat1_label: "", stat2_value: "", stat2_label: "", badge: "", cta_primary: "", cta_secondary: "" },
    services: [],
    testimonials: [],
    contact: { email: "", whatsapp: "", linkedin: "", twitter: "" },
  });

  const loadData = useCallback(async () => {
    try {
      const { data: rows } = await supabase.from("site_content").select("*");
      if (rows) {
        const next = { ...data };
        rows.forEach((row: { section: keyof SiteData; data: any }) => {
          if (row.section in next) (next as any)[row.section] = row.data;
        });
        setData(next);
      }
    } finally { setLoading(false); }
  }, [data]);

  useEffect(() => { loadData(); }, []);

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase.from("site_content").upsert(
      { section: activeTab, data: data[activeTab], updated_at: new Date().toISOString() },
      { onConflict: "section" }
    );
    setSaving(false);
    if (!error) { setSaved(true); setTimeout(() => setSaved(false), 3000); }
  };

  return (
    <div className="max-w-[95rem] mx-auto px-6 py-8 flex flex-col gap-6 font-sans selection:bg-[#7c3aed]/30">
      
      {/* SECCIÓN SUPERIOR: NAVEGACIÓN Y PUBLICACIÓN */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* NAVEGACIÓN CÁPSULA */}
        <nav className="inline-flex p-1 bg-slate-100/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as keyof SiteData)}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2",
                activeTab === tab.id 
                  ? "bg-white dark:bg-white/10 text-[#7c3aed] shadow-md border border-slate-200/50 dark:border-white/10" 
                  : "text-slate-500 dark:text-gray-400 hover:text-[#7c3aed]"
              )}
            >
              <tab.icon size={12} className="stroke-[3]" />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* STATS Y ACCIÓN DE GUARDADO */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live on Wendynieto.com</span>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] shadow-lg",
              saved 
                ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                : "bg-[#7c3aed] text-white shadow-[#7c3aed30]"
            )}
          >
            {saving ? <Loader2 size={14} className="animate-spin stroke-[3]" /> : saved ? <CheckCircle size={14} strokeWidth={3} /> : <Save size={14} strokeWidth={3} />}
            {saving ? 'Procesando' : saved ? 'Publicado' : 'Publicar Cambios'}
          </button>
        </div>
      </div>

      {/* CONTENEDOR DE EDICIÓN GLASS */}
      <div className="bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[600px]">
        
        {/* BARRA DE ESTADO INTERNA */}
        <div className="p-4 px-8 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">
              Sección: {activeTab}
            </h2>
            <button onClick={() => loadData()} className="p-1.5 text-slate-400 hover:text-[#7c3aed] transition-colors">
              <RefreshCw size={12} className={cn(loading && "animate-spin")} />
            </button>
          </div>
          <Globe size={14} className="text-slate-300 dark:text-slate-600" />
        </div>

        {/* ÁREA DE FORMULARIO */}
        <div className="p-10 max-w-5xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 gap-3">
              <div className="w-6 h-6 border-2 border-[#7c3aed20] border-t-[#7c3aed] rounded-full animate-spin" />
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Sincronizando Base de Datos</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {activeTab === 'hero' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Nombre Comercial" value={data.hero.name} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, name: v } })} />
                  <Field label="Status Badge" value={data.hero.badge} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, badge: v } })} />
                  <div className="md:col-span-2">
                    <Field label="Titular Principal (Hero)" value={data.hero.subtitle} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, subtitle: v } })} />
                  </div>
                  <div className="md:col-span-2">
                    <Field label="Manifiesto / Descripción" textarea value={data.hero.description} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, description: v } })} />
                  </div>
                  
                  {/* Stats Grid Interno */}
                  <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-100 dark:border-white/5">
                    <Field label="Dato 1" value={data.hero.stat1_value} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, stat1_value: v } })} />
                    <Field label="Etiqueta 1" value={data.hero.stat1_label} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, stat1_label: v } })} />
                    <Field label="Dato 2" value={data.hero.stat2_value} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, stat2_value: v } })} />
                    <Field label="Etiqueta 2" value={data.hero.stat2_label} onChange={(v: string) => setData({ ...data, hero: { ...data.hero, stat2_label: v } })} />
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-8">
                  {data.services.map((svc, i) => (
                    <div key={i} className="group relative bg-white/40 dark:bg-white/[0.02] border border-slate-100 dark:border-white/10 rounded-[2.5rem] p-10 transition-all hover:border-[#7c3aed]/30 shadow-sm">
                      <button 
                        onClick={() => setData(p => ({ ...p, services: p.services.filter((_, idx) => idx !== i) }))}
                        className="absolute top-8 right-8 text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} strokeWidth={2.5} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Field label="Título" value={svc.title} onChange={(v: string) => { const s = [...data.services]; s[i].title = v; setData({ ...data, services: s }); }} />
                        <Field label="Resumen" value={svc.shortDesc} onChange={(v: string) => { const s = [...data.services]; s[i].shortDesc = v; setData({ ...data, services: s }); }} />
                        <Field label="El Problema" textarea value={svc.problem} onChange={(v: string) => { const s = [...data.services]; s[i].problem = v; setData({ ...data, services: s }); }} />
                        <Field label="Tu Solución" textarea value={svc.solution} onChange={(v: string) => { const s = [...data.services]; s[i].solution = v; setData({ ...data, services: s }); }} />
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={() => setData(p => ({ ...p, services: [...p.services, { title: "", shortDesc: "", problem: "", solution: "" }] }))}
                    className="w-full py-12 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-4"
                  >
                    <Plus size={18} strokeWidth={3} /> Añadir Bloque de Servicio
                  </button>
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Email Oficial" value={data.contact.email} onChange={(v: string) => setData({ ...data, contact: { ...data.contact, email: v } })} />
                  <Field label="WhatsApp Business" value={data.contact.whatsapp} onChange={(v: string) => setData({ ...data, contact: { ...data.contact, whatsapp: v } })} />
                  <Field label="LinkedIn Profile" value={data.contact.linkedin} onChange={(v: string) => setData({ ...data, contact: { ...data.contact, linkedin: v } })} />
                  <Field label="X (Twitter)" value={data.contact.twitter} onChange={(v: string) => setData({ ...data, contact: { ...data.contact, twitter: v } })} />
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}