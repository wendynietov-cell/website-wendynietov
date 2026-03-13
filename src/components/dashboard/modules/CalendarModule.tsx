'use client'

import { useState, useEffect } from 'react'
import { Plus, Users, MapPin, MoreVertical, RefreshCw, Search, Calendar, Filter, Clock, ChevronRight, Video } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Meeting {
  id: string
  title: string
  time: string
  duration: string
  type: 'virtual' | 'presencial'
  participantes: number
  estado: 'programada' | 'en_curso' | 'completada'
  lugar?: string
}

export default function CalendarModule() {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('Todos')

  const tabs = ['Todos', 'Hoy', 'Próximos', 'Historial']

  const [meetings, setMeetings] = useState<Meeting[]>([])

  useEffect(() => {
    const mockMeetings: Meeting[] = [
      { id: 'MTG-001', title: 'ESTRATEGIA DE LANZAMIENTO BUSCART', time: '09:00 AM', duration: '1H', type: 'virtual', participantes: 4, estado: 'programada' },
      { id: 'MTG-002', title: 'REVIEW UI/UX - MÓDULO EXPLORADOR', time: '11:30 AM', duration: '45M', type: 'presencial', participantes: 2, lugar: 'COWORKING HUB', estado: 'en_curso' },
      { id: 'MTG-003', title: 'SINCRONIZACIÓN EQUIPO DESARROLLO', time: '03:00 PM', duration: '30M', type: 'virtual', participantes: 6, estado: 'completada' }
    ]
    setTimeout(() => { setLoading(false); setMeetings(mockMeetings); }, 800)
  }, [])

  return (
    <div className="max-w-[95rem] mx-auto px-6 py-8 flex flex-col gap-6 font-sans selection:bg-[#7c3aed]/30">
      
      {/* SECCIÓN SUPERIOR: TABS, STATS Y BOTÓN NUEVA REUNIÓN */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* NAVEGACIÓN TIPO CÁPSULA */}
        <nav className="inline-flex p-1 bg-slate-100/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                activeTab === tab 
                  ? "bg-white dark:bg-white/10 text-[#7c3aed] shadow-md border border-slate-200/50 dark:border-white/10" 
                  : "text-slate-500 dark:text-gray-400 hover:text-[#7c3aed]"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* STATS Y BOTÓN ACCIÓN */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {[
              { label: 'Live', val: '1', color: 'text-emerald-500', border: 'border-emerald-500/20' },
              { label: 'Prox', val: '2', color: 'text-[#7c3aed]', border: 'border-[#7c3aed]/20' },
              { label: 'Total', val: meetings.length, color: 'text-slate-600 dark:text-slate-300', border: 'border-slate-200 dark:border-white/10' }
            ].map((stat, i) => (
              <div key={i} className={cn("px-4 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md border rounded-full flex items-center gap-3 shadow-sm", stat.border)}>
                <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                <span className={cn("text-[10px] font-black tracking-tighter", stat.color)}>{stat.val}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#7c3aed] text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] shadow-lg shadow-[#7c3aed30]">
            <Plus size={14} strokeWidth={3} />
            Agendar
          </button>
        </div>
      </div>

      {/* CALENDAR LIST CONTAINER */}
      <div className="bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* BARRA SUPERIOR DINÁMICA */}
        <div className="p-4 px-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"></div>
              <span className="text-[10px] font-black text-[#7c3aed] uppercase tracking-tighter">Scheduler Active</span>
            </div>
            <button onClick={() => setLoading(true)} className="p-1.5 text-slate-400 hover:text-[#7c3aed] transition-colors">
              <RefreshCw size={12} className={cn(loading && "animate-spin")} />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 group-focus-within:text-[#7c3aed] transition-colors" />
              <input
                type="text"
                placeholder="BUSCAR EVENTO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-40 pl-8 pr-4 py-1.5 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#7c3aed]/40 transition-all uppercase tracking-widest"
              />
            </div>
            <Filter size={15} className="text-slate-400 cursor-pointer hover:text-[#7c3aed]" />
          </div>
        </div>

        <div className="min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-6 h-6 border-2 border-[#7c3aed20] border-t-[#7c3aed] rounded-full animate-spin" />
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Actualizando Agenda</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {meetings.map((m) => (
                <div key={m.id} className="p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all group relative">
                  <div className="flex items-center gap-6">
                    
                    {/* ICONO / ESTADO */}
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex flex-col items-center justify-center border transition-all shrink-0",
                      m.estado === 'en_curso' 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 shadow-[0_0_10px_rgba(16,185,129,0.1)]" 
                        : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400 group-hover:text-[#7c3aed] group-hover:border-[#7c3aed]/30"
                    )}>
                      <Calendar size={18} strokeWidth={2.5} />
                      <span className="text-[7px] font-black mt-1 uppercase tracking-tighter">
                        {m.time.split(' ')[1]}
                      </span>
                    </div>

                    {/* CONTENIDO CENTRAL */}
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-[#7c3aed] transition-colors truncate">
                          {m.title}
                        </h3>
                        <span className={cn(
                          "text-[7px] font-black px-2 py-0.5 rounded shadow-sm uppercase",
                          m.estado === 'en_curso' ? "bg-emerald-600 text-white" : "bg-slate-200 dark:bg-white/10 text-slate-500"
                        )}>
                          {m.estado.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} className="text-[#7c3aed]" />
                          <span className="text-slate-900 dark:text-white">{m.time}</span>
                          <span className="text-slate-300 dark:text-gray-800">•</span>
                          <span>{m.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={12} className="text-[#7c3aed]" />
                          <span>{m.participantes} ARTISTAS/EQ</span>
                        </div>
                        {m.lugar && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={12} className="text-[#7c3aed]" />
                            <span className="text-[#7c3aed] dark:text-[#a5b4fc]">{m.lugar}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* INDICADORES Y ACCIÓN */}
                    <div className="flex items-center gap-4">
                      {m.type === 'virtual' && (
                        <div className="p-2 bg-[#7c3aed]/5 rounded-lg">
                          <Video size={14} className="text-[#7c3aed]" />
                        </div>
                      )}
                      <ChevronRight size={18} className="text-slate-300 group-hover:text-[#7c3aed] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}