'use client'

import { useState } from 'react'
import { FileText, Tag, Globe, Save, CheckCircle, Loader2, Plus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePageContent } from '@/lib/usePageContent'

const DEFAULT = {
  posts: [] as { title: string; slug: string; excerpt: string; category: string; tags: string; author: string; publishedAt: string; featured: boolean }[],
  categories: [] as { name: string; slug: string; description: string }[],
  seo: {
    title: '',
    description: '',
    keywords: '',
    ogImage: '',
    twitterHandle: '',
    googleAnalytics: '',
  },
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
  { id: 'posts',      label: 'Artículos',  icon: FileText },
  { id: 'categories', label: 'Categorías', icon: Tag },
  { id: 'seo',        label: 'SEO Blog',   icon: Globe },
]

export default function BlogEditor() {
  const [activeTab, setActiveTab] = useState<'posts'|'categories'|'seo'>('posts')
  const { data, setData, loading, saving, saved, save } = usePageContent('blog', DEFAULT)

  const set = (key: string, val: any) => setData({ ...data, [key]: val })

  const updatePost = (i: number, field: string, val: any) => {
    const posts = [...data.posts]
    posts[i] = { ...posts[i], [field]: val }
    set('posts', posts)
  }

  const updateCat = (i: number, field: string, val: string) => {
    const cats = [...data.categories]
    cats[i] = { ...cats[i], [field]: val }
    set('categories', cats)
  }

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

      {/* Artículos */}
      {activeTab === 'posts' && (
        <div className="space-y-4">
          {(data.posts ?? []).map((p, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Artículo {i + 1}</span>
                  {p.featured && <span className="text-[10px] font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full">Destacado</span>}
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1.5 text-xs text-zinc-400 cursor-pointer">
                    <input type="checkbox" checked={p.featured} onChange={e => updatePost(i, 'featured', e.target.checked)}
                      className="rounded border-zinc-300 dark:border-white/20" />
                    Destacar
                  </label>
                  <button onClick={() => set('posts', data.posts.filter((_, idx) => idx !== i))} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Título" value={p.title} onChange={(v: string) => updatePost(i, 'title', v)} />
                <Field label="Slug" value={p.slug} onChange={(v: string) => updatePost(i, 'slug', v)} placeholder="mi-articulo-slug" />
                <Field label="Categoría" value={p.category} onChange={(v: string) => updatePost(i, 'category', v)} />
                <Field label="Autor" value={p.author} onChange={(v: string) => updatePost(i, 'author', v)} placeholder="Wendy Nieto" />
                <Field label="Tags (separados por coma)" value={p.tags} onChange={(v: string) => updatePost(i, 'tags', v)} placeholder="growth, tecnología" />
                <Field label="Fecha publicación" value={p.publishedAt} onChange={(v: string) => updatePost(i, 'publishedAt', v)} placeholder="2025-01-15" />
                <div className="md:col-span-2">
                  <Field label="Extracto" textarea value={p.excerpt} onChange={(v: string) => updatePost(i, 'excerpt', v)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => set('posts', [...data.posts, { title: '', slug: '', excerpt: '', category: '', tags: '', author: 'Wendy Nieto', publishedAt: '', featured: false }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir artículo
          </button>
        </div>
      )}

      {/* Categorías */}
      {activeTab === 'categories' && (
        <div className="space-y-4">
          {(data.categories ?? []).map((c, i) => (
            <div key={i} className="border border-zinc-100 dark:border-white/5 rounded-2xl p-6">
              <div className="flex justify-between mb-4">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Categoría {i + 1}</span>
                <button onClick={() => set('categories', data.categories.filter((_, idx) => idx !== i))} className="text-zinc-300 hover:text-red-400"><X size={16} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Nombre" value={c.name} onChange={(v: string) => updateCat(i, 'name', v)} />
                <Field label="Slug" value={c.slug} onChange={(v: string) => updateCat(i, 'slug', v)} placeholder="mi-categoria" />
                <div className="md:col-span-2">
                  <Field label="Descripción" value={c.description} onChange={(v: string) => updateCat(i, 'description', v)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={() => set('categories', [...data.categories, { name: '', slug: '', description: '' }])}
            className="w-full py-5 border-2 border-dashed border-zinc-100 dark:border-white/5 rounded-2xl text-xs font-bold text-zinc-400 hover:text-[#7c3aed] hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Añadir categoría
          </button>
        </div>
      )}

      {/* SEO */}
      {activeTab === 'seo' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <Field label="Título SEO" value={data.seo.title} onChange={(v: string) => set('seo', { ...data.seo, title: v })} />
            </div>
            <div className="md:col-span-2">
              <Field label="Meta descripción" textarea value={data.seo.description} onChange={(v: string) => set('seo', { ...data.seo, description: v })} />
            </div>
            <Field label="Keywords (separadas por coma)" value={data.seo.keywords} onChange={(v: string) => set('seo', { ...data.seo, keywords: v })} />
            <Field label="Imagen Open Graph (URL)" value={data.seo.ogImage} onChange={(v: string) => set('seo', { ...data.seo, ogImage: v })} />
            <Field label="Twitter Handle" value={data.seo.twitterHandle} onChange={(v: string) => set('seo', { ...data.seo, twitterHandle: v })} placeholder="@wendynieto" />
            <Field label="Google Analytics ID" value={data.seo.googleAnalytics} onChange={(v: string) => set('seo', { ...data.seo, googleAnalytics: v })} placeholder="GA-XXXXXXXXX" />
          </div>
        </div>
      )}
    </div>
  )
}
