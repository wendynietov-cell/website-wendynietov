'use client'

import { Mail, Calendar, Palette, CheckSquare, ArrowUpRight, Plus, Zap, Activity, Globe, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function OverviewModule() {
  const stats = [
    { label: 'Urgentes', val: '12', icon: Mail, color: 'text-red-500' },
    { label: 'Agenda', val: '03', icon: Calendar, color: 'text-violet-500' },
    { label: 'Proyectos', val: '08', icon: Palette, color: 'text-blue-500' },
    { label: 'Tareas', val: '24', icon: CheckSquare, color: 'text-emerald-500' },
  ]

  return (
    <div className="max-w-[90rem] mx-auto px-8 py-4 flex flex-col gap-6 font-sans text-slate-900 dark:text-slate-100 selection:bg-violet-500/30">
      
      {/* HEADER MINIMALISTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/5 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitoreo global de infraestructura BuscArt.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
            {['General', 'Logs'].map((tab) => (
              <button key={tab} className={cn(
                "px-5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                tab === 'General' ? "bg-white dark:bg-white/10 shadow-sm text-violet-600 dark:text-white" : "text-slate-500"
              )}>
                {tab}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-5 py-2 bg-violet-600 text-white rounded-xl text-xs font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-500/20">
            <Plus size={14} />
            Nuevo Registro
          </button>
        </div>
      </div>

      {/* GRID DE STATS REFINADO - Estilo espejo DesignModule */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="group bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] p-4 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/5 ring-1 ring-black/[0.03] dark:ring-white/[0.02]">
            {/* Header compacto con icono y badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                <item.icon size={18} strokeWidth={2.5} className={item.color.replace('text-', '')} />
              </div>
              <span className="px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest border backdrop-blur-md bg-white/80 dark:bg-white/10 text-slate-400 border-white/40">
                Live
              </span>
            </div>
            
            {/* Contenido principal compacto */}
            <div className="space-y-1">
              <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter italic leading-none group-hover:text-violet-500 transition-colors">
                {item.val}
              </p>
              <h3 className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                {item.label}
              </h3>
            </div>
            
            {/* Footer compacto con flecha */}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <span className="text-[8px] font-bold text-slate-400 dark:text-gray-600 tracking-widest uppercase">Actualizado</span>
              <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN DIVIDIDA: ACTIVIDAD Y SISTEMA - Estilo espejo DesignModule */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* PANEL DE ACCIONES - Glass Card Style */}
        <div className="lg:col-span-8 group bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] p-6 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/5 ring-1 ring-black/[0.03] dark:ring-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Zap size={16} className="text-violet-500" strokeWidth={2.5} />
              </div>
              Acceso Inmediato
            </h2>
            <span className="px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest border backdrop-blur-md bg-white/80 dark:bg-white/10 text-slate-400 border-white/40">
              Live
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: 'Artistas', d: 'Gestionar base local', i: Globe },
              { t: 'Eventos', d: 'Logística de sitios', i: Calendar },
              { t: 'Seguridad', d: 'Permisos de empresa', i: ShieldCheck }
            ].map((box, idx) => (
              <button key={idx} className="group p-6 rounded-[2rem] border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] hover:bg-white/60 dark:hover:bg-white/[0.05] hover:border-violet-500/40 transition-all text-left backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <box.i size={20} strokeWidth={2.5} className="text-slate-400 group-hover:text-violet-500 transition-colors" />
                </div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight group-hover:text-violet-500 transition-colors mb-1">{box.t}</h3>
                <p className="text-[8px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">{box.d}</p>
              </button>
            ))}
          </div>
        </div>

        {/* MONITOR DE MÉTRICAS - Glass Card Style */}
        <div className="lg:col-span-4 group bg-white/60 dark:bg-white/[0.02] backdrop-blur-xl border border-white dark:border-white/10 rounded-[2.5rem] p-6 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/5 ring-1 ring-black/[0.03] dark:ring-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-black uppercase tracking-wider flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Activity size={16} className="text-violet-500" strokeWidth={2.5} />
              </div>
              Estado de Red
            </h2>
            <span className="px-2 py-1 rounded-full text-[7px] font-black uppercase tracking-widest border backdrop-blur-md bg-white/80 dark:bg-white/10 text-slate-400 border-white/40">
              Live
            </span>
          </div>
          
          <div className="space-y-4">
            {[
              { n: 'API Latency', v: '18ms', w: '92%' },
              { n: 'Database', v: 'Online', w: '100%' },
              { n: 'Storage', v: '82%', w: '82%' }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-500 dark:text-slate-400">{metric.n}</span>
                  <span className="text-violet-600 dark:text-violet-400 font-bold">{metric.v}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full transition-all duration-1000" style={{ width: metric.w }} />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 rounded-[2rem] border border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] hover:bg-white/60 dark:hover:bg-white/[0.05] hover:border-violet-500/40 transition-all text-[11px] font-bold hover:text-violet-500 text-slate-600 dark:text-slate-300 uppercase tracking-widest backdrop-blur-sm">
            Detalles Técnicos
          </button>
        </div>

      </div>
    </div>
  )
}