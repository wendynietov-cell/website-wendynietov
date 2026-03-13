import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import { DashboardProvider } from '@/contexts/DashboardContext'
import { BreadcrumbProvider } from '@/contexts/BreadcrumbContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children: ReactNode
}

interface PageInfo {
  title?: string
  subtitle?: string
  action?: {
    label: string
    onClick: () => void
    icon?: React.ReactNode
  }
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = await createSupabaseServerClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Protección de ruta a nivel servidor
  if (!user) {
    redirect('/admin/login')
  }

  return (
    <ThemeProvider>
      <DashboardProvider>
        <BreadcrumbProvider>
          <DashboardLayoutWrapper>
            {children}
          </DashboardLayoutWrapper>
        </BreadcrumbProvider>
      </DashboardProvider>
    </ThemeProvider>
  )
}

function DashboardLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#FAFAFA] dark:bg-[#050d1a] text-slate-200 antialiased overflow-hidden">
      
      {/* Capa de gradiente ambiental fija de fondo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_50%)] dark:opacity-40 light:opacity-10 pointer-events-none" />

      {/* Sidebar Fijo */}
      <DashboardSidebar />

      {/* Contenedor Principal */}
      <main className="flex-1 relative flex flex-col min-w-0 overflow-hidden">
        
        {/* Header Glassmorphism */}
        <DashboardHeader />

        {/* Área de Contenido con Scroll Independiente */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-6 md:p-8">
            <section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              {children}
            </section>
          </div>
        </div>

      </main>
    </div>
  )
}