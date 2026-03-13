'use client'

import { useState, useEffect } from 'react'
import { Mail, Send, RefreshCw, Search, Star, Clock, AlertCircle, ChevronRight, Filter, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Email {
  id: string
  subject: string
  sender: string
  preview: string
  timestamp: string
  isUrgent: boolean
  isStarred: boolean
}

export default function CommunicationModule() {
  const [emails, setEmails] = useState<Email[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('Todos')

  const tabs = ['Todos', 'Urgentes', 'Destacados', 'Archivados']

  useEffect(() => {
    const mockEmails: Email[] = [
      { id: '1', subject: 'RE: PROPUESTA DE COLABORACIÓN', sender: 'cliente@empresa.com', preview: 'Necesito revisar los términos del contrato...', timestamp: '15 MIN', isUrgent: true, isStarred: false },
      { id: '2', subject: 'REUNIÓN DE SEGUIMIENTO PROYECTO', sender: 'equipo@agencia.com', preview: 'Confirmo la reunión para hoy a las 3pm...', timestamp: '1 HORA', isUrgent: false, isStarred: true },
      { id: '3', subject: 'FACTURA VENCIDA - RECORDATORIO', sender: 'facturacion@servicio.com', preview: 'Le recordamos que su factura...', timestamp: '2 HORAS', isUrgent: true, isStarred: false }
    ]
    setTimeout(() => { setLoading(false); setEmails(mockEmails); }, 800)
  }, [])

  return (
    <div className="max-w-[95rem] mx-auto px-6 py-8 flex flex-col gap-6 font-sans selection:bg-[#7c3aed]/30">
      
      {/* SECCIÓN SUPERIOR: TABS, STATS Y BOTÓN REDACTAR */}
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

        {/* STATS Y BOTÓN REDACTAR (EXTREMO DERECHO) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {[
              { label: 'Urg', val: '1', color: 'text-red-500', border: 'border-red-500/20' },
              { label: 'Des', val: '3', color: 'text-yellow-500', border: 'border-yellow-500/20' },
              { label: 'Total', val: emails.length, color: 'text-[#7c3aed]', border: 'border-[#7c3aed]/20' }
            ].map((stat, i) => (
              <div key={i} className={cn("px-4 py-1.5 bg-white/60 dark:bg-white/5 backdrop-blur-md border rounded-full flex items-center gap-3 shadow-sm", stat.border)}>
                <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                <span className={cn("text-[10px] font-black tracking-tighter", stat.color)}>{stat.val}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#7c3aed] text-white rounded-full font-black uppercase tracking-widest text-[10px] transition-all hover:scale-[1.02] shadow-lg shadow-[#7c3aed30]">
            <Plus size={14} strokeWidth={3} />
            Redactar
          </button>
        </div>
      </div>

      {/* EMAIL LIST (CONTENEDOR GLASS CON BUSQUEDA E INDICADORES) */}
      <div className="bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
        
        {/* BARRA SUPERIOR DINÁMICA */}
        <div className="p-4 px-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02] flex items-center justify-between">
          
          {/* INDICADORES EN LUGAR DE TEXTO "INBOX" */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"></div>
              <span className="text-[10px] font-black text-[#7c3aed] uppercase tracking-tighter">Live Inbox</span>
            </div>
            <button onClick={() => setLoading(true)} className="p-1.5 text-slate-400 hover:text-[#7c3aed] transition-colors">
              <RefreshCw size={12} className={cn(loading && "animate-spin")} />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            {/* CAJA DE BUSQUEDA PEQUEÑA */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 group-focus-within:text-[#7c3aed] transition-colors" />
              <input
                type="text"
                placeholder="FILTRAR..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-40 pl-8 pr-4 py-1.5 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-[9px] font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#7c3aed]/40 transition-all uppercase tracking-widest"
              />
            </div>
            <Filter size={15} className="text-slate-400 cursor-pointer hover:text-[#7c3aed]" />
          </div>
        </div>

        <div className="min-h-[300px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-6 h-6 border-2 border-[#7c3aed20] border-t-[#7c3aed] rounded-full animate-spin" />
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400">Sincronizando</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-white/5">
              {emails.map((email) => (
                <div key={email.id} className="p-6 md:p-8 hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-all group relative">
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border transition-all",
                      email.isUrgent ? "bg-red-500/10 border-red-500/20 text-red-600 shadow-[0_0_10px_rgba(239,68,68,0.1)]" : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400 group-hover:text-[#7c3aed] group-hover:border-[#7c3aed]/30"
                    )}>
                      <Mail size={18} strokeWidth={2.5} />
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-[#7c3aed] transition-colors">{email.subject}</h3>
                        {email.isUrgent && <span className="text-[7px] font-black bg-red-600 text-white px-2 py-0.5 rounded shadow-sm">URGENTE</span>}
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                        <span className="text-[#7c3aed] dark:text-[#a5b4fc]">{email.sender}</span>
                        <span className="text-slate-300 dark:text-gray-800">•</span>
                        <span className="text-slate-400">{email.timestamp}</span>
                      </div>
                      <p className="text-[12px] text-slate-500 dark:text-gray-400 font-medium line-clamp-1 group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">{email.preview}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      {email.isStarred && <Star size={16} className="text-yellow-500 fill-current" />}
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