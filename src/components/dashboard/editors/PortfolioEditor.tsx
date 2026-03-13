'use client'

import { useState } from 'react'
import { FileEdit, FileText, Code, BarChart3, Save, CheckCircle, Loader2, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  projects: [] as { title: string; description: string; client: string; category: string; duration: string; url: string }[],
  caseStudies: [] as { title: string; client: string; challenge: string; solution: string; results: string }[],
  technologies: [] as { name: string; category: string; description: string }[],
  metrics: [] as { label: string; value: string; period: string }[],
}

const Field = ({ label, value, onChange, textarea = false, placeholder = '' }: any) => (
  <div className="space-y-2 w-full group">
    <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2 group-focus-within:text-[#7c3aed] transition-colors">{label}</label>
    {textarea
      ? <textarea rows={3} value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all resize-none" />
      : <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all" />}
  </div>
)

const TABS = [
  { id: 'projects',     label: 'Proyectos',     icon: FileEdit },
  { id: 'caseStudies',  label: 'Casos',         icon: FileText },
  { id: 'technologies', label: 'Tecnologías',   icon: Code },
  { id: 'metrics',      label: 'Métricas',      icon: BarChart3 },
]

export default function PortfolioEditor() {
  const [activeTab, setActiveTab] = useState<'projects'|'caseStudies'|'technologies'|'metrics'>('projects')
  const { data, setData, loading, saving, saved, save } = usePageContent('portfolio', DEFAULT)

  const set = (key: string, val: any) => setData({ ...data, [key]: val })

  const update = (key: keyof typeof DEFAULT, i: number, field: string, val: string) => {
    const arr = [...(data[key] as any[])]
    arr[i] = { ...arr[i], [field]: val }
    set(key, arr)
  }

  const remove = (key: keyof typeof DEFAULT, i: number) =>
    set(key, (data[key] as any[]).filter((_, idx) => idx !== i))

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="animate-spin text-[#7c3aed]" size={28} />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in duration-500">

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

      {/* Proyectos */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          {(data.projects ?? []).map((p, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Proyecto {i + 1}</span>
                <button onClick={() => remove('projects', i)} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Título" value={p.title} onChange={(v: string) => update('projects', i, 'title', v)} />
                <Field label="Cliente" value={p.client} onChange={(v: string) => update('projects', i, 'client', v)} />
                <Field label="Categoría" value={p.category} onChange={(v: string) => update('projects', i, 'category', v)} />
                <Field label="Duración" value={p.duration} onChange={(v: string) => update('projects', i, 'duration', v)} placeholder="3 meses" />
                <Field label="URL del proyecto" value={p.url} onChange={(v: string) => update('projects', i, 'url', v)} placeholder="https://..." />
                <div className="md:col-span-2">
                  <Field label="Descripción" textarea value={p.description} onChange={(v: string) => update('projects', i, 'description', v)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => set('projects', [...data.projects, { title: '', description: '', client: '', category: '', duration: '', url: '' }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir proyecto
          </button>
        </div>
      )}

      {/* Casos de estudio */}
      {activeTab === 'caseStudies' && (
        <div className="space-y-4">
          {(data.caseStudies ?? []).map((c, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Caso {i + 1}</span>
                <button onClick={() => remove('caseStudies', i)} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Título" value={c.title} onChange={(v: string) => update('caseStudies', i, 'title', v)} />
                <Field label="Cliente" value={c.client} onChange={(v: string) => update('caseStudies', i, 'client', v)} />
                <Field label="Desafío" textarea value={c.challenge} onChange={(v: string) => update('caseStudies', i, 'challenge', v)} />
                <Field label="Solución" textarea value={c.solution} onChange={(v: string) => update('caseStudies', i, 'solution', v)} />
                <div className="md:col-span-2">
                  <Field label="Resultados" textarea value={c.results} onChange={(v: string) => update('caseStudies', i, 'results', v)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => set('caseStudies', [...data.caseStudies, { title: '', client: '', challenge: '', solution: '', results: '' }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir caso de estudio
          </button>
        </div>
      )}

      {/* Tecnologías */}
      {activeTab === 'technologies' && (
        <div className="space-y-4">
          {(data.technologies ?? []).map((t, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Tecnología {i + 1}</span>
                <button onClick={() => remove('technologies', i)} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nombre" value={t.name} onChange={(v: string) => update('technologies', i, 'name', v)} />
                <Field label="Categoría" value={t.category} onChange={(v: string) => update('technologies', i, 'category', v)} placeholder="Frontend, Backend..." />
                <div className="md:col-span-2">
                  <Field label="Descripción" value={t.description} onChange={(v: string) => update('technologies', i, 'description', v)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => set('technologies', [...data.technologies, { name: '', category: '', description: '' }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir tecnología
          </button>
        </div>
      )}

      {/* Métricas */}
      {activeTab === 'metrics' && (
        <div className="space-y-4">
          {(data.metrics ?? []).map((m, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Métrica {i + 1}</span>
                <button onClick={() => remove('metrics', i)} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field label="Etiqueta" value={m.label} onChange={(v: string) => update('metrics', i, 'label', v)} placeholder="ROI Promedio" />
                <Field label="Valor" value={m.value} onChange={(v: string) => update('metrics', i, 'value', v)} placeholder="320%" />
                <Field label="Período" value={m.period} onChange={(v: string) => update('metrics', i, 'period', v)} placeholder="12 meses" />
              </div>
            </div>
          ))}
          <button onClick={() => set('metrics', [...data.metrics, { label: '', value: '', period: '' }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir métrica
          </button>
        </div>
      )}
    </div>
  )
}
