'use client'

import { Mail, Calendar, Palette, CheckSquare } from 'lucide-react'

export default function OverviewModule() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white mb-8">Centro de Mando Personal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <Mail className="w-8 h-8 text-purple-400" />
            <span className="text-xs text-gray-400 bg-purple-600/20 px-2 py-1 rounded-full">+15%</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Correos Urgentes</h3>
          <p className="text-3xl font-bold text-purple-400">12</p>
          <p className="text-gray-300 text-sm mt-2">Sin leer</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-8 h-8 text-blue-400" />
            <span className="text-xs text-gray-400 bg-blue-600/20 px-2 py-1 rounded-full">Hoy</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Próximas Reuniones</h3>
          <p className="text-3xl font-bold text-blue-400">3</p>
          <p className="text-gray-300 text-sm mt-2">2 virtuales, 1 presencial</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <Palette className="w-8 h-8 text-pink-400" />
            <span className="text-xs text-gray-400 bg-pink-600/20 px-2 py-1 rounded-full">Activos</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Proyectos Activos</h3>
          <p className="text-3xl font-bold text-pink-400">8</p>
          <p className="text-gray-300 text-sm mt-2">3 en revisión</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <CheckSquare className="w-8 h-8 text-cyan-400" />
            <span className="text-xs text-gray-400 bg-cyan-600/20 px-2 py-1 rounded-full">Esta semana</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Tareas Pendientes</h3>
          <p className="text-3xl font-bold text-cyan-400">24</p>
          <p className="text-gray-300 text-sm mt-2">5 de alta prioridad</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold mb-2">Redactar Email</h3>
            <p className="text-sm opacity-90">Crear nuevo mensaje urgente</p>
          </button>
          <button className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold mb-2">Nueva Tarea</h3>
            <p className="text-sm opacity-90">Añadir a Notion</p>
          </button>
          <button className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="font-semibold mb-2">Subir Proyecto</h3>
            <p className="text-sm opacity-90">Añadir al canvas</p>
          </button>
        </div>
      </div>
    </div>
  )
}
