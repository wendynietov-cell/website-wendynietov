'use client'

import { useState, useEffect } from 'react'
import { CheckSquare, Plus, Calendar, Clock, Star, Circle, ChevronRight, RefreshCw, Search, Filter, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  database: string
}

export default function ProductivityModule() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_progress' | 'completed'>('all')

  useEffect(() => {
    const mockTasks: Task[] = [
      { id: '1', title: 'REVISAR PROPUESTA DE CLIENTE', description: 'Analizar y aprobar la propuesta para el nuevo proyecto de restaurante.', status: 'pending', priority: 'high', dueDate: '15 ENE', database: 'PROYECTOS CLIENTES' },
      { id: '2', title: 'ACTUALIZAR PORTFOLIO', description: 'Añadir los últimos 3 proyectos realizados al sitio web oficial.', status: 'in_progress', priority: 'medium', dueDate: '20 ENE', database: 'MARKETING' },
      { id: '3', title: 'REUNIÓN CON EQUIPO DEV', description: 'Sincronización semanal sobre el estado del sprint actual.', status: 'completed', priority: 'medium', dueDate: '10 ENE', database: 'REUNIONES' }
    ]
    setTimeout(() => { setTasks(mockTasks); setLoading(false); }, 800)
  }, [])

  const filteredTasks = tasks.filter(task => 
    (filter === 'all' || task.status === filter) &&
    (task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.database.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="max-w-[95rem] mx-auto px-6 py-8 flex flex-col gap-6 font-sans selection:bg-[#7c3aed]/30">
      
      {/* SECCIÓN SUPERIOR: TABS, STATS Y REDACTAR */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* NAVEGACIÓN CÁPSULA */}
        <nav className="inline-flex p-1 bg-slate-100/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-sm">
          {['all', 'pending', 'in_progress', 'completed'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t as any)}
              className={cn(
                "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                filter === t 
                  ? "bg-white dark:bg-white/10 text-[#7c3aed] shadow-md border border-slate-200/50 dark:border-white/10" 
                  : "text-slate-500 dark:text-gray-400 hover:text-[#7c3aed]"
              )}
            >
              {t === 'all' ? 'Todas' : t === 'in_progress' ? 'En Curso' : t}
            </button>
          ))}
        </nav>

        {/* STATS Y BOTÓN NUEVA TAREA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {[
              { label: 'Pend', val: tasks.filter(t => t.status === 'pending').length, color: 'text-[#7c3aed]', border: 'border-[#7c3aed]/20' },
              { label: 'Crit', val: tasks.filter(t => t.priority === 'high').length, color: 'text-red-500', border: 'border-red-500/20' },
              { label: 'Total', val: tasks.length, color: 'text-slate-600 dark:text-slate-300', border: 'border-slate-200 dark:border-white/10' }
            ].map((stat, i) => (
              <div key={i} className={cn("px-4 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md border rounded-full flex items-center gap-3 shadow-sm", stat.border)}>
                <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                <span className={cn("text-[10px] font-black tracking-tighter", stat.color)}>{stat.val}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#7c3aed] text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] shadow-lg shadow-[#7c3aed30]">
            <Plus size={14} strokeWidth={3} />
            Nueva Tarea
          </button>
        </div>
      </div>

      {/* TAREAS LIST (CONTENEDOR GLASS CON BUSQUEDA INTERNA) */}
      <div className="bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* BARRA SUPERIOR DINÁMICA */}
        <div className="p-4 px-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"></div>
              <span className="text-[10px] font-black text-[#7c3aed] uppercase tracking-tighter">Notion Sync</span>
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
                placeholder="FILTRAR TAREAS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-40 pl-8 pr-4 py-1.5 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#7c3aed]/40 transition-all uppercase tracking-widest"
              />
            </div>
            <Filter size={15} className="text-slate-400 cursor-pointer hover:text-[#7c3aed]" />
          </div>
        </div>

        {/* LISTADO DE TAREAS */}
        <div className="min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-3">
              <div className="w-6 h-6 border-2 border-[#7c3aed20] border-t-[#7c3aed] rounded-full animate-spin" />
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Actualizando Flujo</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="text-center py-32 space-y-4">
              <CheckSquare className="w-12 h-12 text-slate-200 dark:text-white/5 mx-auto stroke-[1.5]" />
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Sin tareas registradas</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {filteredTasks.map((task) => (
                <div key={task.id} className="p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all group relative">
                  <div className="flex items-start gap-6">
                    {/* Status Icon */}
                    <div className="mt-1">
                      {task.status === 'completed' ? (
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                          <CheckCircle2 size={18} strokeWidth={2.5} />
                        </div>
                      ) : (
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center border transition-all",
                          task.status === 'in_progress' ? "bg-[#7c3aed]/10 border-[#7c3aed]/20 text-[#7c3aed]" : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400 group-hover:border-[#7c3aed]/30"
                        )}>
                          {task.status === 'in_progress' ? <Clock size={18} strokeWidth={2.5} /> : <Circle size={18} strokeWidth={2.5} />}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className={cn(
                          "text-sm font-black uppercase tracking-tight transition-colors",
                          task.status === 'completed' ? "text-slate-400 line-through" : "text-slate-900 dark:text-white group-hover:text-[#7c3aed]"
                        )}>
                          {task.title}
                        </h3>
                        <span className={cn(
                          "text-[7px] font-black px-2 py-0.5 rounded shadow-sm border",
                          task.priority === 'high' ? "bg-red-500 text-white border-red-600" : "bg-slate-100 dark:bg-white/10 text-slate-500 border-slate-200 dark:border-white/20"
                        )}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                        <span className="text-[#7c3aed] dark:text-[#a5b4fc] flex items-center gap-1">
                          <Calendar size={10} /> {task.database}
                        </span>
                        <span className="text-slate-300 dark:text-gray-800">•</span>
                        <span className="text-slate-400">{task.dueDate}</span>
                      </div>

                      <p className="text-[12px] text-slate-500 dark:text-gray-400 font-medium line-clamp-2 max-w-4xl transition-colors group-hover:text-slate-700 dark:group-hover:text-gray-300">
                        {task.description}
                      </p>
                    </div>

                    <ChevronRight size={18} className="text-slate-300 group-hover:text-[#7c3aed] group-hover:translate-x-1 transition-all" />
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