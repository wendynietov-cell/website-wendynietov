'use client'

import { useState } from 'react'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar'
import CommunicationModule from '@/components/dashboard/modules/CommunicationModule'
import CalendarModule from '@/components/dashboard/modules/CalendarModule'
import DesignModule from '@/components/dashboard/modules/DesignModule'
import ProductivityModule from '@/components/dashboard/modules/ProductivityModule'
import WebEditorModule from '@/components/dashboard/modules/WebEditorModule'
import OverviewModule from '@/components/dashboard/modules/OverviewModule'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

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
    <div className="flex h-full">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
