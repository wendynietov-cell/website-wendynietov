'use client'

import { Save, CheckCircle, Loader2, Mail, Phone, Linkedin, Twitter, Instagram, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  email: '',
  whatsapp: '',
  phone: '',
  linkedin: '',
  twitter: '',
  instagram: '',
  city: 'Ciudad de México',
  country: 'México',
}

const Field = ({ label, value, onChange, placeholder = '', icon: Icon }: any) => (
  <div className="space-y-2 w-full group">
    <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2 group-focus-within:text-[#7c3aed] transition-colors">{label}</label>
    <div className="relative">
      {Icon && <Icon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />}
      <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className={cn(
          'w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all',
          Icon ? 'pl-10 pr-5' : 'px-5'
        )} />
    </div>
  </div>
)

export default function ContactEditor() {
  const { data, setData, loading, saving, saved, save } = usePageContent('contact', DEFAULT)
  const set = (key: string, val: string) => setData({ ...data, [key]: val })

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <Loader2 className="animate-spin text-[#7c3aed]" size={28} />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-8 animate-in fade-in duration-500">

      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-white/[0.03] pb-6">
        <div>
          <h2 className="text-xl font-bold dark:text-white">Contacto</h2>
          <p className="text-xs text-zinc-400 mt-0.5">Canales de comunicación que aparecen en tu sitio</p>
        </div>
        <button onClick={() => save()}
          className={cn('flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold transition-all',
            saved ? 'bg-emerald-500 text-white' : 'bg-[#7c3aed] text-white hover:bg-[#5b21b6]')}>
          {saving ? <Loader2 size={16} className="animate-spin" /> : saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saving ? 'Guardando...' : saved ? '¡Publicado!' : 'Publicar cambios'}
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Comunicación directa</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Email" value={data.email} onChange={(v: string) => set('email', v)} placeholder="hola@wendynieto.com" icon={Mail} />
            <Field label="WhatsApp" value={data.whatsapp} onChange={(v: string) => set('whatsapp', v)} placeholder="+52 55 0000 0000" icon={Phone} />
            <Field label="Teléfono" value={data.phone} onChange={(v: string) => set('phone', v)} placeholder="+52 55 0000 0000" icon={Phone} />
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-white/5 pt-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Redes sociales</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="LinkedIn (URL)" value={data.linkedin} onChange={(v: string) => set('linkedin', v)} placeholder="https://linkedin.com/in/..." icon={Linkedin} />
            <Field label="Twitter / X (URL)" value={data.twitter} onChange={(v: string) => set('twitter', v)} placeholder="https://x.com/..." icon={Twitter} />
            <Field label="Instagram (URL)" value={data.instagram} onChange={(v: string) => set('instagram', v)} placeholder="https://instagram.com/..." icon={Instagram} />
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-white/5 pt-6">
          <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Ubicación</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Ciudad" value={data.city} onChange={(v: string) => set('city', v)} icon={MapPin} />
            <Field label="País" value={data.country} onChange={(v: string) => set('country', v)} />
          </div>
        </div>
      </div>
    </div>
  )
}
