'use client'

import { useEffect } from 'react'
import CommunicationModule from '@/components/dashboard/modules/CommunicationModule'
import CalendarModule from '@/components/dashboard/modules/CalendarModule'
import DesignModule from '@/components/dashboard/modules/DesignModule'
import ProductivityModule from '@/components/dashboard/modules/ProductivityModule'
import WebEditorModule from '@/components/dashboard/modules/WebEditorModule'
import OverviewModule from '@/components/dashboard/modules/OverviewModule'
import { useDashboard } from '@/contexts/DashboardContext'
import { useBreadcrumbs } from '@/contexts/BreadcrumbContext'

export default function DashboardPage() {
  const { activeTab } = useDashboard()
  const { setBreadcrumbs } = useBreadcrumbs()

  useEffect(() => {
    // Update breadcrumbs based on active tab
    const breadcrumbMap = {
      'overview': [{ label: 'Inicio', href: '/dashboard' }],
      'communication': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Comunicación' }],
      'calendar': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Agenda' }],
      'design': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Diseño' }],
      'productivity': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Productividad' }],
      'web-editor': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }],
      'home': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Home' }],
      'about': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Sobre Mí' }],
      'services': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Servicios' }],
      'portfolio': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Portafolio' }],
      'blog': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Blog' }],
      'contact': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Contacto' }],
      'settings': [{ label: 'Inicio', href: '/dashboard' }, { label: 'Configuración Web' }, { label: 'Configuración' }],
    }

    setBreadcrumbs(breadcrumbMap[activeTab as keyof typeof breadcrumbMap] || [{ label: 'Inicio', href: '/dashboard' }])
  }, [activeTab, setBreadcrumbs])

  const getPageInfo = () => {
    const pageInfo = {
      'overview': { title: 'Panel Principal', subtitle: 'Resumen de tu actividad reciente' },
      'communication': { title: 'Comunicación', subtitle: 'Gestiona tus mensajes y notificaciones' },
      'calendar': { title: 'Agenda', subtitle: 'Organiza tus eventos y citas' },
      'design': { title: 'Diseño', subtitle: 'Personaliza la apariencia de tu sitio' },
      'productivity': { title: 'Productividad', subtitle: 'Herramientas para optimizar tu trabajo' },
      'web-editor': { title: 'Configuración Web', subtitle: 'Edita el contenido de tu sitio web' },
      'home': { title: 'Home', subtitle: 'Configura tu página principal' },
      'about': { title: 'Sobre Mí', subtitle: 'Edita tu información personal' },
      'services': { title: 'Servicios', subtitle: 'Gestiona tu catálogo de servicios' },
      'portfolio': { title: 'Portafolio', subtitle: 'Muestra tus mejores proyectos' },
      'blog': { title: 'Blog', subtitle: 'Administra tus publicaciones' },
      'contact': { title: 'Contacto', subtitle: 'Configura tus canales de comunicación' },
      'settings': { title: 'Configuración', subtitle: 'Ajustes generales del sitio' },
    }
    return pageInfo[activeTab as keyof typeof pageInfo] || pageInfo.overview
  }

  const pageInfo = getPageInfo()

  const renderContent = () => {
    switch (activeTab) {
      case 'communication':
        return <CommunicationModule />
      case 'calendar':
        return <CalendarModule />
      case 'design':
        return <DesignModule />
      case 'productivity':
        return <ProductivityModule />
      case 'web-editor':
        return <WebEditorModule />
      default:
        return <OverviewModule />
    }
  }

  return (
    <>
      {/* Header will be rendered by the layout */}
      <div className="h-full">
        {renderContent()}
      </div>
    </>
  )
}
