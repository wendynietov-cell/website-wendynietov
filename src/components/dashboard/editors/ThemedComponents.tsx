'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

interface ThemedInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'textarea'
  label?: string
  className?: string
  rows?: number
}

export function ThemedInput({ 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text',
  label,
  className = '',
  rows = 3
}: ThemedInputProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const baseClasses = cn(
    'w-full rounded-xl px-4 py-3 outline-none transition-all resize-none',
    isDark 
      ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/50'
      : 'bg-black/5 border border-black/10 text-black placeholder:text-black/30 focus:ring-2 focus:ring-purple-500/40 focus:border-purple-400/50',
    className
  )

  if (type === 'textarea') {
    return (
      <div className="space-y-2">
        {label && (
          <label className={cn(
            'text-xs font-bold uppercase tracking-widest',
            isDark ? 'text-purple-400' : 'text-purple-600'
          )}>
            {label}
          </label>
        )}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={baseClasses}
        />
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className={cn(
          'text-xs font-bold uppercase tracking-widest',
          isDark ? 'text-purple-400' : 'text-purple-600'
        )}>
          {label}
        </label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={baseClasses}
      />
    </div>
  )
}

interface ThemedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

export function ThemedButton({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = ''
}: ThemedButtonProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const variants = {
    primary: isDark 
      ? 'bg-purple-600 text-white hover:bg-purple-500' 
      : 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: isDark
      ? 'bg-white/10 text-white hover:bg-white/20' 
      : 'bg-black/10 text-black hover:bg-black/20',
    danger: isDark
      ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30'
      : 'bg-red-600/10 text-red-600 hover:bg-red-600/20'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center gap-2 rounded-xl font-semibold transition-all duration-200',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  )
}

interface ThemedCardProps {
  children: React.ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg'
}

export function ThemedCard({ 
  children, 
  className = '',
  padding = 'md'
}: ThemedCardProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  return (
    <div className={cn(
      'rounded-2xl border transition-all',
      isDark 
        ? 'bg-white/5 border-white/10 hover:border-white/20' 
        : 'bg-black/5 border-black/10 hover:border-black/20',
      paddings[padding],
      className
    )}>
      {children}
    </div>
  )
}

interface ThemedHeadingProps {
  level?: 1 | 2 | 3 | 4
  children: React.ReactNode
  className?: string
}

export function ThemedHeading({ 
  level = 2, 
  children, 
  className = '' 
}: ThemedHeadingProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const sizes = {
    1: 'text-3xl',
    2: 'text-2xl', 
    3: 'text-xl',
    4: 'text-lg'
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  const classes = cn(
    'font-bold tracking-tight',
    sizes[level],
    isDark ? 'text-white' : 'text-black',
    className
  )

  return React.createElement(HeadingTag, { className: classes }, children)
}

interface ThemedTextProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ThemedText({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: ThemedTextProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const variants = {
    primary: isDark ? 'text-white' : 'text-black',
    secondary: isDark ? 'text-gray-300' : 'text-gray-700',
    muted: isDark ? 'text-gray-500' : 'text-gray-400'
  }

  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <p className={cn(
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </p>
  )
}
