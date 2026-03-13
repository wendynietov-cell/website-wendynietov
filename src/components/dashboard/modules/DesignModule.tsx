'use client'

import { useState, useEffect } from 'react'
import { 
  Palette, Upload, Eye, Download, List, Search, 
  Plus, Folder, LayoutGrid, ChevronRight, RefreshCcw, MoreHorizontal 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  type: 'website' | 'logo' | 'banner' | 'social' | 'other'
  thumbnail: string
  lastModified: string
  status: 'draft' | 'review' | 'completed'
  client?: string
}

export default function DesignModule() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const mockProjects: Project[] = [
      { id: '1', title: 'SITIO WEB - RESTAURANTE EL SABOR', type: 'website', thumbnail: '', lastModified: 'HACE 2 HORAS', status: 'review', client: 'EL SABOR GOURMET' },
      { id: '2', title: 'LOGO - BOUTIQUE HOTEL', type: 'logo', thumbnail: '', lastModified: 'AYER', status: 'completed', client: 'HOTEL CENTRAL' },
      { id: '3', title: 'BANNER SOCIAL MEDIA - VERANO', type: 'social', thumbnail: '', lastModified: 'HACE 3 DÍAS', status: 'draft', client: 'MARCA DE ROPA' }
    ]
    setTimeout(() => { setProjects(mockProjects); setLoading(false); }, 800)
  }, [])

  return (
    <div className="max-w-[95rem] mx-auto px-6 py-6 flex flex-col gap-6 font-sans selection:bg-[#7c3aed]/30">
      
      {/* HEADER & MINI STATS */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase italic">
            Canvas <span className="text-[#7c3aed]">.</span>
          </h1>
          
          {/* STATS STRIP - Estilo Unificado */}
          <div className="flex items-center bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-white/40 dark:border-white/10 px-4 py-1.5 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/5">
            {[
              { label: 'Total', val: 3, color: 'text-[#7c3aed]' },
              { label: 'Finalizados', val: 1, color: 'text-emerald-500' },
              { label: 'Revisión', val: 1, color: 'text-orange-500' },
              { label: 'Bocetos', val: 1, color: 'text-blue-500' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 px-3">
                <span className={cn("text-[11px] font-black", stat.color)}>{stat.val}</span>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{stat.label}</span>
                {i < 3 && <div className="w-[1px] h-3 bg-slate-200 dark:bg-white/10 ml-3" />}
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#7c3aed] text-white rounded-full font-black uppercase tracking-widest text-[9px] hover:scale-[1.02] shadow-lg shadow-[#7c3aed]/20 active:scale-95">
          <Plus size={12} strokeWidth={4} />
          Nuevo Proyecto
        </button>
      </div>

      {/* SEARCH COMPACTO - Estilo Glass Unificado */}
      <div className="flex items-center justify-between gap-4 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md border border-white/40 dark:border-white/10 p-1.5 rounded-2xl shadow-sm ring-1 ring-black/5">
        <div className="flex-1 relative max-w-xs group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-[#7c3aed] stroke-[3]" />
          <input
            type="text"
            placeholder="BUSCAR..."
            className="w-full bg-transparent pl-10 pr-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white outline-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
          />
        </div>
        
        <div className="flex items-center gap-1">
          <div className="flex bg-slate-100/50 dark:bg-black/20 p-1 rounded-xl border border-slate-200/50 dark:border-white/5">
            <button onClick={() => setViewMode('grid')} className={cn("p-1.5 rounded-lg", viewMode === 'grid' ? "bg-white dark:bg-white/10 text-[#7c3aed] shadow-sm" : "text-slate-400")}>
              <LayoutGrid size={14} strokeWidth={3} />
            </button>
            <button onClick={() => setViewMode('list')} className={cn("p-1.5 rounded-lg", viewMode === 'list' ? "bg-white dark:bg-white/10 text-[#7c3aed] shadow-sm" : "text-slate-400")}>
              <List size={14} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>

      {/* GRID DE PROYECTOS - TARJETAS GLASS BUSCART */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
           [1,2,3].map(i => <div key={i} className="aspect-[16/10] bg-slate-100 rounded-[2.5rem]" />)
        ) : (
          projects.map((project) => (
            <div key={project.id} className="group bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] p-4 hover:border-[#7c3aed]/40 hover:shadow-2xl hover:shadow-[#7c3aed]/5 ring-1 ring-black/[0.03] dark:ring-white/[0.02]">
              {/* Thumbnail Area */}
              <div className="aspect-[16/10] bg-slate-50 dark:bg-black/20 rounded-[2rem] mb-5 flex items-center justify-center relative overflow-hidden">
                <Palette size={40} className="text-slate-200 dark:text-white/5 stroke-[1]" />
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest border backdrop-blur-md",
                    project.status === 'completed' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                    project.status === 'review' ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                    "bg-white/80 dark:bg-white/10 text-slate-400 border-white/40"
                  )}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="px-2 pb-2">
                <p className="text-[8px] font-black text-[#7c3aed] uppercase tracking-[0.2em] mb-1">{project.client}</p>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight group-hover:text-[#7c3aed]">
                  {project.title}
                </h3>
                
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[8px] font-bold text-slate-400 uppercase italic">{project.lastModified}</span>
                  <div className="flex gap-1">
                    <button className="p-2 bg-white/50 dark:bg-white/5 rounded-xl text-slate-300 hover:text-[#7c3aed] transition-all">
                      <Eye size={14} strokeWidth={3} />
                    </button>
                    <button className="p-2 bg-white/50 dark:bg-white/5 rounded-xl text-slate-300 hover:text-[#7c3aed] transition-all">
                      <Download size={14} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}