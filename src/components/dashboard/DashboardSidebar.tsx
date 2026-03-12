'use client'

import { useState } from 'react'
import { Mail, Calendar, Palette, CheckSquare, Settings, Home, User, LogOut, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarItem {
  icon: any
  label: string
  id: string
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: 'Inicio', id: 'overview' },
  { icon: Mail, label: 'Comunicación', id: 'communication' },
  { icon: Calendar, label: 'Agenda', id: 'calendar' },
  { icon: Palette, label: 'Diseño', id: 'design' },
  { icon: CheckSquare, label: 'Productividad', id: 'productivity' },
  { icon: Settings, label: 'Configuración Web', id: 'web-editor' },
]

interface DashboardSidebarProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export default function DashboardSidebar({ activeTab = 'overview', onTabChange }: DashboardSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleTabChange = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId)
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogout = async () => {
    const { supabase } = await import('@/lib/supabase')
    await supabase.auth.signOut()
    window.location.href = '/admin/login'
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-black/20 backdrop-blur-lg border border-white/10 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        'fixed lg:relative w-64 h-full bg-black/20 backdrop-blur-lg border-r border-white/10 z-40 transition-transform duration-300',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      )}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-1 rounded-lg text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="space-y-2 flex-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    'w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left',
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
          
          <div className="border-t border-white/10 pt-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
