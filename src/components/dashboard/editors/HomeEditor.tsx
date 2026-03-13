'use client'

import { Briefcase, Phone, Save, CheckCircle, Loader2, Heart, Layout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  name: 'Wendy Nieto',
  badge: 'Disponible para proyectos',
  subtitle: '',
  description: '',
  cta_primary: 'Ver servicios',
  cta_secondary: 'Hablemos',
  stat1_value: '120+', stat1_label: 'Empresas asesoradas',
  stat2_value: '3×',   stat2_label: 'Crecimiento en ventas',
  stat3_value: '5yr',  stat3_label: 'Exp. Tech Sales',
}

const Field = ({ label, value, onChange, textarea = false, placeholder = '' }: any) => (
  <div className="space-y-2 w-full group">
    <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2 group-focus-within:text-[#7c3aed] transition-colors">{label}</label>
    {textarea
      ? <textarea rows={4} value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all resize-none" />
      : <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all" />}
  </div>
)

const TABS = [
  { id: 'hero',         label: 'Portada',   icon: Layout },
  { id: 'services',     label: 'Servicios', icon: Briefcase },
  { id: 'testimonials', label: 'Historias', icon: Heart },
  { id: 'contact',      label: 'Contacto',  icon: Phone },
]

export default function HomeEditor() {
  const [activeTab, setActiveTab] = useState<'hero'|'services'|'testimonials'|'contact'>('hero')
  const { data, setData, loading, saving, saved, save } = usePageContent('home', DEFAULT)

  const set = (key: string, val: string) => setData({ ...data, [key]: val })

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="animate-spin text-[#7c3aed]" size={28} />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in duration-500">

      {/* Header: tabs + guardar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-100 dark:border-white/[0.03] pb-6">
        <nav className="flex p-1.5 bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-[2rem]">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id as any)}
              className={cn('flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all',
                activeTab === t.id ? 'bg-white dark:bg-zinc-800 text-[#7c3aed] shadow-md' : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200')}>
              <t.icon size={13} />{t.label}
            </button>
          ))}
        </nav>
        <button onClick={() => save()}
          className={cn('flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all',
            saved ? 'bg-emerald-500 text-white' : 'bg-[#7c3aed] text-white hover:bg-[#5b21b6]')}>
          {saving ? <Loader2 size={16} className="animate-spin" /> : saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saving ? 'Guardando...' : saved ? '¡Publicado!' : 'Publicar cambios'}
        </button>
      </div>

      {/* Portada */}
      {activeTab === 'hero' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="Nombre" value={data.name} onChange={(v: string) => set('name', v)} />
            <Field label="Badge / Estado" value={data.badge} onChange={(v: string) => set('badge', v)} placeholder="Disponible para proyectos" />
            <div className="md:col-span-2">
              <Field label="Titular principal" value={data.subtitle} onChange={(v: string) => set('subtitle', v)} />
            </div>
            <div className="md:col-span-2">
              <Field label="Descripción / Bio" textarea value={data.description} onChange={(v: string) => set('description', v)} />
            </div>
            <Field label="Botón principal" value={data.cta_primary} onChange={(v: string) => set('cta_primary', v)} />
            <Field label="Botón secundario" value={data.cta_secondary} onChange={(v: string) => set('cta_secondary', v)} />
          </div>
          <div className="border-t border-zinc-100 dark:border-white/5 pt-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Estadísticas</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Field label="Stat 1 — Número" value={data.stat1_value} onChange={(v: string) => set('stat1_value', v)} />
              <Field label="Stat 1 — Etiqueta" value={data.stat1_label} onChange={(v: string) => set('stat1_label', v)} />
              <Field label="Stat 2 — Número" value={data.stat2_value} onChange={(v: string) => set('stat2_value', v)} />
              <Field label="Stat 2 — Etiqueta" value={data.stat2_label} onChange={(v: string) => set('stat2_label', v)} />
              <Field label="Stat 3 — Número" value={data.stat3_value} onChange={(v: string) => set('stat3_value', v)} />
              <Field label="Stat 3 — Etiqueta" value={data.stat3_label} onChange={(v: string) => set('stat3_label', v)} />
            </div>
          </div>
        </div>
      )}

      {activeTab !== 'hero' && (
        <div className="flex items-center justify-center h-40 text-zinc-400 text-sm">
          Edita esta sección desde <span className="ml-1 font-semibold text-[#7c3aed]">Admin Contenido</span>
        </div>
      )}
    </div>
  )
}
