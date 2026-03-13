'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, ChevronRight, LogOut, Menu, Sun, Moon, Settings, X, Command } from 'lucide-react'
import { useBreadcrumbs } from '@/contexts/BreadcrumbContext'
import { useDashboard } from '@/contexts/DashboardContext'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

const PAGE_INFO: Record<string, { title: string; subtitle: string }> = {
  'overview':      { title: 'Panel Principal',   subtitle: 'Resumen de actividad' },
  'communication': { title: 'Comunicación',      subtitle: 'Mensajes y notificaciones' },
  'calendar':      { title: 'Agenda',            subtitle: 'Eventos y citas' },
  'design':        { title: 'Diseño',            subtitle: 'Apariencia del sitio' },
  'productivity':  { title: 'Productividad',     subtitle: 'Optimización de flujo' },
  'web-editor':    { title: 'Configuración Web', subtitle: 'Contenido del sitio' },
  'content-admin': { title: 'Admin Contenido',   subtitle: 'Gestión de activos' },
  'home':          { title: 'Home',              subtitle: 'Página principal' },
  'about':         { title: 'Sobre Mí',          subtitle: 'Información personal' },
  'services':      { title: 'Servicios',         subtitle: 'Catálogo de servicios' },
  'portfolio':     { title: 'Portafolio',        subtitle: 'Proyectos destacados' },
  'blog':          { title: 'Blog',              subtitle: 'Publicaciones' },
  'contact':       { title: 'Contacto',          subtitle: 'Canales de comunicación' },
  'settings':      { title: 'Configuración',     subtitle: 'Ajustes generales' },
}

export default function DashboardHeader() {
  const { breadcrumbs } = useBreadcrumbs()
  const { activeTab } = useDashboard()
  const { theme, setTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const isDark = theme === 'dark'
  const page = PAGE_INFO[activeTab] ?? PAGE_INFO['overview']

  const handleLogout = async () => {
    const { supabase } = await import('@/lib/supabase')
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-30 w-full border-b backdrop-blur-md transition-all duration-300 px-6 py-3",
      isDark ? "bg-[#060e1c]/90 border-white/[0.06]" : "bg-white/80 border-zinc-200"
    )}>
      <div className="flex items-center justify-between gap-4 max-w-[1600px] mx-auto">
        
        {/* ── Izquierda: Breadcrumbs + Info ── */}
        <div className="flex-1 min-w-0">
          <nav className="flex items-center gap-1.5 mb-0.5">
            {breadcrumbs.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3 h-3 text-zinc-400" />}
                <span className={cn(
                  "text-[10px] uppercase tracking-wider font-medium",
                  i === breadcrumbs.length - 1 
                    ? (isDark ? "text-zinc-100" : "text-zinc-900")
                    : "text-zinc-500"
                )}>
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <h1 className={cn(
              "text-xl font-bold tracking-tight",
              isDark ? "text-white" : "text-zinc-900"
            )}>
              {page.title}
            </h1>
            <span className="hidden sm:inline-block h-4 w-[1px] bg-zinc-700/30" />
            <span className="hidden sm:inline-block text-[11px] text-zinc-500 font-medium uppercase tracking-wide">
              {page.subtitle}
            </span>
          </div>
        </div>

        {/* ── Derecha: Search + User + Menu ── */}
        <div className="flex items-center gap-4">
          
          {/* Barra de búsqueda Minimal */}
          <div className="relative hidden md:block">
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200",
              focused 
                ? "w-64 border-purple-500/50 ring-2 ring-purple-500/10" 
                : "w-48 border-zinc-200 dark:border-white/5 bg-zinc-100/50 dark:bg-white/5"
            )}>
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <input
                id="dash-search"
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="bg-transparent text-sm focus:outline-none w-full text-zinc-700 dark:text-zinc-300"
              />
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-sm">
                <Command className="w-2.5 h-2.5 text-zinc-400" />
                <span className="text-[9px] font-bold text-zinc-400">K</span>
              </div>
            </div>
          </div>

          {/* Perfil de Usuario */}
          <div className={cn(
            "flex items-center gap-3 px-2 py-1.5 rounded-2xl border transition-colors",
            isDark ? "bg-[#060e1c]/60 border-white/[0.06]" : "bg-zinc-100/50 border-zinc-200"
          )}>
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/20">
                W
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-zinc-950" />
            </div>
            
            <div className="hidden lg:block leading-none">
              <p className={cn("text-xs font-bold", isDark ? "text-zinc-100" : "text-zinc-900")}>Wendy Nieto</p>
              <p className="text-[10px] text-zinc-500 mt-1 font-medium">Administrator</p>
            </div>
          </div>

          {/* Botón de Menú / Acciones Rápidas */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl transition-all border",
                menuOpen 
                  ? "bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/20" 
                  : "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {menuOpen && (
              <div className={cn(
                "absolute right-0 top-full mt-3 w-56 rounded-2xl border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200",
                isDark ? "bg-[#060e1c] border-white/[0.08]" : "bg-white border-zinc-200"
              )}>
                <div className="p-2 space-y-1">
                  <div className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Apariencia</div>
                  <div className="grid grid-cols-2 gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                    <button 
                      onClick={() => setTheme('light')}
                      className={cn(
                        "flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all",
                        theme === 'light' ? "bg-white shadow-sm text-purple-600" : "text-zinc-500"
                      )}
                    >
                      <Sun className="w-3.5 h-3.5" /> Claro
                    </button>
                    <button 
                      onClick={() => setTheme('dark')}
                      className={cn(
                        "flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium transition-all",
                        theme === 'dark' ? "bg-zinc-700 shadow-sm text-purple-400" : "text-zinc-500"
                      )}
                    >
                      <Moon className="w-3.5 h-3.5" /> Oscuro
                    </button>
                  </div>
                  
                  <div className="h-[1px] bg-zinc-200 dark:bg-white/5 my-2" />
                  
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" /> Configuración
                  </button>
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}