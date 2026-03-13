'use client'

import { useState } from 'react'
import { Settings, Globe, BarChart2, Save, CheckCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  general: {
    siteTitle: 'Wendy Nieto - Estratega de Plataformas y Crecimiento Tech',
    siteDescription: '',
    logoUrl: '/images/logo.png',
    faviconUrl: '/favicon.ico',
    language: 'es',
    timezone: 'America/Mexico_City',
    maintenanceMode: false,
  },
  seo: {
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    ogImage: '',
    twitterHandle: '@wendynieto',
    googleAnalytics: '',
    robotsTxt: 'User-agent: *\nAllow: /\nSitemap: https://wendynieto.com/sitemap.xml',
  },
  analytics: {
    googleAnalytics: '',
    googleTagManager: '',
    facebookPixel: '',
    hotjar: '',
    mixpanel: '',
  },
}

const Field = ({ label, value, onChange, textarea = false, placeholder = '', mono = false }: any) => (
  <div className="space-y-2 w-full group">
    <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2 group-focus-within:text-[#7c3aed] transition-colors">{label}</label>
    {textarea
      ? <textarea rows={mono ? 5 : 3} value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className={cn('w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all resize-none', mono && 'font-mono text-xs')} />
      : <input type="text" value={value ?? ''} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 transition-all" />}
  </div>
)

const Toggle = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div onClick={() => onChange(!checked)}
      className={cn('w-10 h-5 rounded-full transition-colors relative', checked ? 'bg-[#7c3aed]' : 'bg-zinc-200 dark:bg-white/10')}>
      <span className={cn('absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform', checked ? 'translate-x-5' : 'translate-x-0.5')} />
    </div>
    <span className="text-sm dark:text-zinc-300">{label}</span>
  </label>
)

const TABS = [
  { id: 'general',   label: 'General',   icon: Settings },
  { id: 'seo',       label: 'SEO',       icon: Globe },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
]

export default function SettingsEditor() {
  const [activeTab, setActiveTab] = useState<'general'|'seo'|'analytics'>('general')
  const { data, setData, loading, saving, saved, save } = usePageContent('settings', DEFAULT)

  const setGeneral = (key: string, val: any) => setData({ ...data, general: { ...data.general, [key]: val } })
  const setSeo = (key: string, val: string) => setData({ ...data, seo: { ...data.seo, [key]: val } })
  const setAnalytics = (key: string, val: string) => setData({ ...data, analytics: { ...data.analytics, [key]: val } })

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

      {/* General */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <Field label="Título del sitio" value={data.general.siteTitle} onChange={(v: string) => setGeneral('siteTitle', v)} />
            </div>
            <div className="md:col-span-2">
              <Field label="Descripción del sitio" textarea value={data.general.siteDescription} onChange={(v: string) => setGeneral('siteDescription', v)} />
            </div>
            <Field label="URL del logo" value={data.general.logoUrl} onChange={(v: string) => setGeneral('logoUrl', v)} placeholder="/images/logo.png" />
            <Field label="URL del favicon" value={data.general.faviconUrl} onChange={(v: string) => setGeneral('faviconUrl', v)} placeholder="/favicon.ico" />
            <div>
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2">Idioma</label>
              <select value={data.general.language} onChange={e => setGeneral('language', e.target.value)}
                className="mt-2 w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none">
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-medium tracking-wider text-zinc-400 dark:text-zinc-500 ml-2">Zona horaria</label>
              <select value={data.general.timezone} onChange={e => setGeneral('timezone', e.target.value)}
                className="mt-2 w-full bg-white/30 dark:bg-white/[0.02] border border-zinc-200/50 dark:border-white/5 rounded-2xl px-5 py-4 text-sm dark:text-zinc-200 focus:outline-none">
                <option value="America/Mexico_City">Ciudad de México</option>
                <option value="America/New_York">Nueva York</option>
                <option value="America/Los_Angeles">Los Ángeles</option>
                <option value="Europe/Madrid">Madrid</option>
              </select>
            </div>
          </div>
          <div className="border-t border-zinc-100 dark:border-white/5 pt-6 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Estado del sitio</p>
            <Toggle label="Modo mantenimiento" checked={data.general.maintenanceMode} onChange={(v: boolean) => setGeneral('maintenanceMode', v)} />
          </div>
        </div>
      )}

      {/* SEO */}
      {activeTab === 'seo' && (
        <div className="space-y-5">
          <div className="md:col-span-2">
            <Field label="Meta título" value={data.seo.metaTitle} onChange={(v: string) => setSeo('metaTitle', v)} />
          </div>
          <Field label="Meta descripción" textarea value={data.seo.metaDescription} onChange={(v: string) => setSeo('metaDescription', v)} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Keywords (separadas por coma)" value={data.seo.metaKeywords} onChange={(v: string) => setSeo('metaKeywords', v)} />
            <Field label="Imagen Open Graph (URL)" value={data.seo.ogImage} onChange={(v: string) => setSeo('ogImage', v)} />
            <Field label="Twitter Handle" value={data.seo.twitterHandle} onChange={(v: string) => setSeo('twitterHandle', v)} placeholder="@wendynieto" />
            <Field label="Google Analytics ID" value={data.seo.googleAnalytics} onChange={(v: string) => setSeo('googleAnalytics', v)} placeholder="GA-XXXXXXXXX" />
          </div>
          <Field label="robots.txt" textarea mono value={data.seo.robotsTxt} onChange={(v: string) => setSeo('robotsTxt', v)} />
        </div>
      )}

      {/* Analytics */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Google Analytics" value={data.analytics.googleAnalytics} onChange={(v: string) => setAnalytics('googleAnalytics', v)} placeholder="GA-XXXXXXXXX" />
          <Field label="Google Tag Manager" value={data.analytics.googleTagManager} onChange={(v: string) => setAnalytics('googleTagManager', v)} placeholder="GTM-XXXXXXX" />
          <Field label="Facebook Pixel" value={data.analytics.facebookPixel} onChange={(v: string) => setAnalytics('facebookPixel', v)} />
          <Field label="Hotjar" value={data.analytics.hotjar} onChange={(v: string) => setAnalytics('hotjar', v)} />
          <Field label="Mixpanel" value={data.analytics.mixpanel} onChange={(v: string) => setAnalytics('mixpanel', v)} />
        </div>
      )}
    </div>
  )
}
