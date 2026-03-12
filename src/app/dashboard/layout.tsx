import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Verificar si el usuario tiene acceso al dashboard personal
  // Solo el correo específico tendrá acceso
  const authorizedEmail = process.env.DASHBOARD_AUTHORIZED_EMAIL
  if (user.email !== authorizedEmail) {
    redirect('/admin')
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <DashboardSidebar />
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  )
}
