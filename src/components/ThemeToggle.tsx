'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 text-white dark:bg-white/5 dark:border-white/10 light:bg-black/5 light:border-black/10 dark:text-white light:text-black shadow-2xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 group"
      title={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
      )}
    </button>
  )
}
