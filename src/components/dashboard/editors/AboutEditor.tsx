'use client'

import { useState } from 'react'
import { User, Briefcase, Code, BookOpen, Save, CheckCircle, Loader2, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  name: 'Wendy Nieto',
  title: 'Estratega de Plataformas y Crecimiento Tech',
  bio: '',
  location: 'Ciudad de México, México',
  languages: ['Español', 'Inglés'],
  experience: [] as { company: string; position: string; period: string; description: string }[],
  skills: [] as { name: string; category: string }[],
  education: [] as { institution: string; degree: string; period: string }[],
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
  { id: 'profile',    label: 'Perfil',      icon: User },
  { id: 'experience', label: 'Experiencia', icon: Briefcase },
  { id: 'skills',     label: 'Habilidades', icon: Code },
  { id: 'education',  label: 'Educación',   icon: BookOpen },
]

export default function AboutEditor() {
  const [activeTab, setActiveTab] = useState<'profile'|'experience'|'skills'|'education'>('profile')
  const { data, setData, loading, saving, saved, save } = usePageContent('about', DEFAULT)

  const set = (key: string, val: any) => setData({ ...data, [key]: val })

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="animate-spin text-[#7c3aed]" size={28} />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in duration-500">

      {/* Header */}
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

      {/* Perfil */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Nombre" value={data.name} onChange={(v: string) => set('name', v)} />
          <Field label="Título / Especialidad" value={data.title} onChange={(v: string) => set('title', v)} />
          <Field label="Ubicación" value={data.location} onChange={(v: string) => set('location', v)} />
          <Field label="Idiomas (separados por coma)" value={data.languages?.join(', ')} onChange={(v: string) => set('languages', v.split(',').map(s => s.trim()))} />
          <div className="md:col-span-2">
            <Field label="Bio / Sobre mí" textarea value={data.bio} onChange={(v: string) => set('bio', v)} />
          </div>
        </div>
      )}

      {/* Experiencia */}
      {activeTab === 'experience' && (
        <div className="space-y-4">
          {(data.experience ?? []).map((exp, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Exp. {i + 1}</span>
                <button onClick={() => set('experience', data.experience.filter((_, idx) => idx !== i))}
                  className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Empresa" value={exp.company} onChange={(v: string) => { const e = [...data.experience]; e[i] = { ...e[i], company: v }; set('experience', e) }} />
                <Field label="Cargo" value={exp.position} onChange={(v: string) => { const e = [...data.experience]; e[i] = { ...e[i], position: v }; set('experience', e) }} />
                <Field label="Período" value={exp.period} onChange={(v: string) => { const e = [...data.experience]; e[i] = { ...e[i], period: v }; set('experience', e) }} placeholder="2022 - Presente" />
                <Field label="Descripción" value={exp.description} onChange={(v: string) => { const e = [...data.experience]; e[i] = { ...e[i], description: v }; set('experience', e) }} />
              </div>
            </div>
          ))}
          <button onClick={() => set('experience', [...data.experience, { company: '', position: '', period: '', description: '' }])}
            className="w-full py-4 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir experiencia
          </button>
        </div>
      )}

      {/* Habilidades */}
      {activeTab === 'skills' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {(data.skills ?? []).map((skill, i) => (
              <div key={i} className="flex items-center gap-2 border border-zinc-100 dark:border-white/5 rounded-xl px-4 py-3">
                <input value={skill.name} onChange={e => { const s = [...data.skills]; s[i] = { ...s[i], name: e.target.value }; set('skills', s) }}
                  className="flex-1 bg-transparent text-sm dark:text-zinc-200 focus:outline-none" placeholder="Habilidad" />
                <input value={skill.category} onChange={e => { const s = [...data.skills]; s[i] = { ...s[i], category: e.target.value }; set('skills', s) }}
                  className="w-20 bg-transparent text-xs text-zinc-400 focus:outline-none" placeholder="Categoría" />
                <button onClick={() => set('skills', data.skills.filter((_, idx) => idx !== i))}
                  className="text-zinc-300 hover:text-red-400 shrink-0"><X size={14} /></button>
              </div>
            ))}
          </div>
          <button onClick={() => set('skills', [...data.skills, { name: '', category: '' }])}
            className="w-full py-4 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir habilidad
          </button>
        </div>
      )}

      {/* Educación */}
      {activeTab === 'education' && (
        <div className="space-y-4">
          {(data.education ?? []).map((edu, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Educación {i + 1}</span>
                <button onClick={() => set('education', data.education.filter((_, idx) => idx !== i))}
                  className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Field label="Institución" value={edu.institution} onChange={(v: string) => { const e = [...data.education]; e[i] = { ...e[i], institution: v }; set('education', e) }} />
                <Field label="Título / Carrera" value={edu.degree} onChange={(v: string) => { const e = [...data.education]; e[i] = { ...e[i], degree: v }; set('education', e) }} />
                <Field label="Período" value={edu.period} onChange={(v: string) => { const e = [...data.education]; e[i] = { ...e[i], period: v }; set('education', e) }} />
              </div>
            </div>
          ))}
          <button onClick={() => set('education', [...data.education, { institution: '', degree: '', period: '' }])}
            className="w-full py-4 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir educación
          </button>
        </div>
      )}
    </div>
  )
}
