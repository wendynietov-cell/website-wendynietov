'use client'

import { useState } from 'react'
import { Save, CheckCircle, Loader2, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  items: [] as { title: string; description: string; price: string; duration: string; category: string }[],
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

export default function ServicesEditor() {
  const { data, setData, loading, saving, saved, save } = usePageContent('services', DEFAULT)

  const setItem = (i: number, key: string, val: string) => {
    const items = [...data.items]
    items[i] = { ...items[i], [key]: val }
    setData({ ...data, items })
  }

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="animate-spin text-[#7c3aed]" size={28} />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in duration-500">

      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/[0.03] pb-6">
        <div>
          <h2 className="text-xl font-bold dark:text-white">Servicios</h2>
          <p className="text-xs text-zinc-400 mt-0.5">{data.items?.length ?? 0} servicios configurados</p>
        </div>
        <button onClick={() => save()}
          className={cn('flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all',
            saved ? 'bg-emerald-500 text-white' : 'bg-[#7c3aed] text-white hover:bg-[#5b21b6]')}>
          {saving ? <Loader2 size={16} className="animate-spin" /> : saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saving ? 'Guardando...' : saved ? '¡Publicado!' : 'Publicar cambios'}
        </button>
      </div>

      <div className="space-y-4">
        {(data.items ?? []).map((svc, i) => (
          <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 hover:border-[#7c3aed]/20 transition-all">
            <div className="flex justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Servicio {i + 1}</span>
              <button onClick={() => setData({ ...data, items: data.items.filter((_, idx) => idx !== i) })}
                className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Título" value={svc.title} onChange={(v: string) => setItem(i, 'title', v)} />
              <Field label="Categoría" value={svc.category} onChange={(v: string) => setItem(i, 'category', v)} placeholder="Consultoría, Desarrollo..." />
              <Field label="Precio" value={svc.price} onChange={(v: string) => setItem(i, 'price', v)} placeholder="Desde $500 USD" />
              <Field label="Duración" value={svc.duration} onChange={(v: string) => setItem(i, 'duration', v)} placeholder="4-6 semanas" />
              <div className="md:col-span-2">
                <Field label="Descripción" textarea value={svc.description} onChange={(v: string) => setItem(i, 'description', v)} />
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setData({ ...data, items: [...data.items, { title: '', description: '', price: '', duration: '', category: '' }] })}
          className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
          <Plus size={16} /> Añadir servicio
        </button>
      </div>
    </div>
  )
}
