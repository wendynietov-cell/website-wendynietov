'use client'

import { useState } from 'react'
import {
  Mail, Calendar, Palette, CheckSquare, Settings, Home,
  User, Menu, X, FileEdit, Layout,
  Sparkles, Briefcase, Phone, ChevronRight, ChevronLeft, FileText,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useDashboard } from '@/contexts/DashboardContext'
import { useTheme } from '@/contexts/ThemeContext'

// ─────────────────────────────────────────────
// Navegación
// ─────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    label: 'Principal',
    items: [
      { icon: Home,        label: 'Inicio',        id: 'overview',      accent: '#a855f7' },
      { icon: Mail,        label: 'Comunicación',  id: 'communication', accent: '#a855f7' },
      { icon: Calendar,    label: 'Agenda',        id: 'calendar',      accent: '#10b981' },
      { icon: Palette,     label: 'Diseño',        id: 'design',        accent: '#ec4899' },
      { icon: CheckSquare, label: 'Productividad', id: 'productivity',  accent: '#a855f7' },
    ],
  },
  {
    label: 'Sitio Web',
    items: [
      {
        icon: Layout,
        label: 'Config. Web',
        id: 'web-editor',
        accent: '#ec4899',
        subItems: [
          { id: 'home',      label: 'Home',          icon: Home      },
          { id: 'about',     label: 'Sobre Mí',      icon: User      },
          { id: 'services',  label: 'Servicios',     icon: Briefcase },
          { id: 'portfolio', label: 'Portafolio',    icon: FileEdit  },
          { id: 'blog',      label: 'Blog',          icon: FileText  },
          { id: 'contact',   label: 'Contacto',      icon: Phone     },
          { id: 'settings',  label: 'Configuración', icon: Settings  },
        ],
      },
    ],
  },
] as const

const WEB_EDITOR_SUBS = new Set(['home', 'about', 'services', 'portfolio', 'blog', 'contact', 'settings'])

export default function DashboardSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { activeTab, activeSubTab, setActiveTab, setActiveSubTab } = useDashboard()
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  const handleNav = (id: string) => {
    if (WEB_EDITOR_SUBS.has(id)) {
      setActiveTab('web-editor')
      setActiveSubTab(id)
    } else {
      setActiveTab(id)
    }
    setIsMobileOpen(false)
  }

  const toggleExpand = (id: string) => {
    const next = new Set(expanded)
    next.has(id) ? next.delete(id) : next.add(id)
    setExpanded(next)
  }

  return (
    <>
      {/* ── Botón mobile ── */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "p-2.5 rounded-xl border backdrop-blur-md transition-all",
            isDark ? "bg-[#060e1c]/80 border-white/10 text-white" : "bg-white/80 border-black/5 text-black"
          )}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Sidebar ── */}
      <aside
        className={cn(
          'fixed lg:relative h-screen z-40 flex flex-col transition-all duration-300 ease-in-out border-r',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          isCollapsed ? 'w-20' : 'w-64',
          isDark ? 'bg-[#060e1c] border-white/[0.06]' : 'bg-zinc-50 border-black/5'
        )}
      >
        {/* Glow sutil superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          
          {/* ── Brand / Header ── */}
          <div className={cn(
            "h-20 flex items-center shrink-0 transition-all px-6",
            isCollapsed ? "justify-center" : "justify-between"
          )}>
            <div className="flex items-center gap-3">
              <div 
                className="w-9 h-9 flex items-center justify-center rounded-xl shadow-lg shadow-purple-500/20"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className={cn(
                    "font-bold text-lg leading-none tracking-tight",
                    isDark ? "text-white" : "text-zinc-900"
                  )}>
                    Dashboard
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-purple-500 font-medium mt-1">
                    Creator
                  </span>
                </div>
              )}
            </div>
            
            {!isCollapsed && (
              <button 
                onClick={() => setIsCollapsed(true)}
                className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-zinc-400"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            
            {isCollapsed && (
               <button 
                onClick={() => setIsCollapsed(false)}
                className="absolute -right-3 top-8 w-6 h-6 rounded-full border bg-inherit flex items-center justify-center hover:scale-110 transition-transform"
                style={{ borderColor: isDark ? '#27272a' : '#e4e4e7' }}
               >
                 <ChevronRight className="w-3 h-3 text-zinc-400" />
               </button>
            )}
          </div>

          {/* ── Navigation ── */}
          <nav 
            className="flex-1 overflow-y-auto px-3 py-4 space-y-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {NAV_SECTIONS.map((section) => (
              <div key={section.label} className="space-y-1">
                {!isCollapsed && (
                  <h3 className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500/70">
                    {section.label}
                  </h3>
                )}
                
                {section.items.map((item) => {
                  const isActive = activeTab === item.id
                  const isExpanded = expanded.has(item.id)
                  const hasSubs = 'subItems' in item
                  const Icon = item.icon

                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        onClick={() => hasSubs && !isCollapsed ? toggleExpand(item.id) : handleNav(item.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                          isActive 
                            ? (isDark ? "bg-white/5 text-white" : "bg-zinc-200 text-zinc-900")
                            : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                        )}
                      >
                        <div className={cn(
                          "w-5 h-5 flex items-center justify-center transition-colors",
                          isActive ? "text-purple-500" : "group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                        )}>
                          <Icon strokeWidth={isActive ? 2.5 : 2} className="w-5 h-5" />
                        </div>
                        
                        {!isCollapsed && (
                          <span className="text-[14px] font-medium flex-1 text-left">
                            {item.label}
                          </span>
                        )}

                        {hasSubs && !isCollapsed && (
                          <ChevronRight className={cn(
                            "w-3.5 h-3.5 transition-transform opacity-40",
                            isExpanded && "rotate-90"
                          )} />
                        )}
                      </button>

                      {/* Sub Items */}
                      {hasSubs && isExpanded && !isCollapsed && (
                        <div className="ml-9 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                          {(item as any).subItems.map((sub: any) => {
                            const isSubActive = activeTab === 'web-editor' && activeSubTab === sub.id
                            const SubIcon = sub.icon
                            return (
                              <button
                                key={sub.id}
                                onClick={() => handleNav(sub.id)}
                                className={cn(
                                  "w-full flex items-center gap-2 px-4 py-2 text-[13px] transition-colors rounded-r-lg",
                                  isSubActive 
                                    ? "text-purple-500 font-semibold bg-purple-500/5" 
                                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                                )}
                              >
                                <SubIcon className="w-3.5 h-3.5" />
                                {sub.label}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </nav>

          {/* ── Footer ── */}
          <div className="p-4 mt-auto">
            <div className={cn(
              "flex items-center gap-3 p-3 rounded-2xl border transition-all",
              isDark ? "bg-zinc-900/50 border-white/5" : "bg-white border-black/5",
              isCollapsed && "justify-center"
            )}>
              <div className="relative flex shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
              {!isCollapsed && (
                <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-tight">
                  Sistema Activo
                </span>
              )}
            </div>
          </div>

        </div>
      </aside>

      {/* Overlay mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}