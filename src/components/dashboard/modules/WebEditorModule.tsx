'use client'

import { useDashboard } from '@/contexts/DashboardContext'
import HomeEditor from '../editors/HomeEditor'
import AboutEditor from '../editors/AboutEditor'
import ServicesEditor from '../editors/ServicesEditor'
import PortfolioEditor from '../editors/PortfolioEditor'
import BlogEditor from '../editors/BlogEditor'
import ContactEditor from '../editors/ContactEditor'
import SettingsEditor from '../editors/SettingsEditor'

const EDITORS: Record<string, React.ComponentType> = {
  home:      HomeEditor,
  about:     AboutEditor,
  services:  ServicesEditor,
  portfolio: PortfolioEditor,
  blog:      BlogEditor,
  contact:   ContactEditor,
  settings:  SettingsEditor,
}

export default function WebEditorModule() {
  const { activeSubTab } = useDashboard()
  const Editor = EDITORS[activeSubTab] ?? HomeEditor
  return <Editor />
}
