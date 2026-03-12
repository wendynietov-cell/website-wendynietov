'use client'

import { useState, useEffect } from 'react'
import { CheckSquare, Plus, Calendar, Clock, AlertCircle, CheckCircle2, Circle } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  database: string
}

export default function ProductivityModule() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'in_progress' | 'completed'>('all')

  useEffect(() => {
    // Simulación de carga de tareas desde Notion
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Revisar propuesta de cliente',
        description: 'Analizar y aprobar la propuesta para el nuevo proyecto de restaurante',
        status: 'pending',
        priority: 'high',
        dueDate: '2024-01-15',
        database: 'Proyectos Clientes'
      },
      {
        id: '2',
        title: 'Actualizar portfolio',
        description: 'Añadir los últimos 3 proyectos al sitio web',
        status: 'in_progress',
        priority: 'medium',
        dueDate: '2024-01-20',
        database: 'Marketing'
      },
      {
        id: '3',
        title: 'Reunión con equipo de desarrollo',
        description: 'Sincronización semanal sobre el estado del proyecto',
        status: 'completed',
        priority: 'medium',
        dueDate: '2024-01-10',
        database: 'Reuniones'
      },
      {
        id: '4',
        title: 'Preparar presentación',
        description: 'Crear slides para la conferencia del próximo mes',
        status: 'pending',
        priority: 'low',
        dueDate: '2024-02-01',
        database: 'Eventos'
      },
      {
        id: '5',
        title: 'Optimizar campañas ADS',
        description: 'Revisar y ajustar presupuestos de publicidad',
        status: 'in_progress',
        priority: 'high',
        dueDate: '2024-01-12',
        database: 'Marketing'
      }
    ]
    
    setTimeout(() => {
      setTasks(mockTasks)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    return task.status === filter
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-600/20 border-red-600/30'
      case 'medium': return 'text-yellow-400 bg-yellow-600/20 border-yellow-600/30'
      case 'low': return 'text-green-400 bg-green-600/20 border-green-600/30'
      default: return 'text-gray-400 bg-gray-600/20 border-gray-600/30'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case 'in_progress': return <Clock className="w-5 h-5 text-yellow-400" />
      default: return <Circle className="w-5 h-5 text-gray-400" />
    }
  }

  const taskStats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
    highPriority: tasks.filter(t => t.priority === 'high').length
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Productividad - Notion</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <Plus className="w-4 h-4" />
          <span>Nueva Tarea</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <p className="text-2xl font-bold text-white">{taskStats.total}</p>
          <p className="text-sm text-gray-300">Total</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <p className="text-2xl font-bold text-blue-400">{taskStats.pending}</p>
          <p className="text-sm text-gray-300">Pendientes</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <p className="text-2xl font-bold text-yellow-400">{taskStats.inProgress}</p>
          <p className="text-sm text-gray-300">En Progreso</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <p className="text-2xl font-bold text-green-400">{taskStats.completed}</p>
          <p className="text-sm text-gray-300">Completadas</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <p className="text-2xl font-bold text-red-400">{taskStats.highPriority}</p>
          <p className="text-sm text-gray-300">Alta Prioridad</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 border-b border-white/10">
        {[
          { key: 'all', label: 'Todas' },
          { key: 'pending', label: 'Pendientes' },
          { key: 'in_progress', label: 'En Progreso' },
          { key: 'completed', label: 'Completadas' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-4 py-2 font-medium transition-colors duration-200 border-b-2 ${
              filter === tab.key
                ? 'text-purple-400 border-purple-400'
                : 'text-gray-400 border-transparent hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-12">
            <CheckSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300">No hay tareas en esta categoría</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredTasks.map((task) => (
              <div key={task.id} className="p-4 hover:bg-white/5 transition-colors duration-200">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(task.status)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{task.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                        </span>
                        <span className="text-xs text-gray-400">{task.dueDate}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{task.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{task.database}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Sincronizar con Notion</h3>
          <p className="text-sm text-gray-300">Actualizar todas las bases de datos</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Ver en Notion</h3>
          <p className="text-sm text-gray-300">Abrir el workspace completo</p>
        </button>
      </div>
    </div>
  )
}
