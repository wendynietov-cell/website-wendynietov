'use client'

import { useState, useEffect } from 'react'
import { Palette, Upload, Eye, Download, Grid, List, Search, Filter, Plus, Folder } from 'lucide-react'

interface Project {
  id: string
  title: string
  type: 'website' | 'logo' | 'banner' | 'social' | 'other'
  thumbnail: string
  lastModified: string
  status: 'draft' | 'review' | 'completed'
  client?: string
}

export default function DesignModule() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')

  useEffect(() => {
    // Simulación de carga de proyectos desde almacenamiento
    const mockProjects: Project[] = [
      {
        id: '1',
        title: 'Sitio Web - Restaurante El Sabor',
        type: 'website',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Hace 2 horas',
        status: 'review',
        client: 'Restaurante El Sabor'
      },
      {
        id: '2',
        title: 'Logo - Boutique Hotel',
        type: 'logo',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Ayer',
        status: 'completed',
        client: 'Boutique Hotel Central'
      },
      {
        id: '3',
        title: 'Banner Social Media - Campaña Verano',
        type: 'social',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Hace 3 días',
        status: 'draft',
        client: 'Marca de Ropa'
      },
      {
        id: '4',
        title: 'Website - E-commerce Tienda',
        type: 'website',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Hace 1 semana',
        status: 'completed',
        client: 'Tienda Online'
      },
      {
        id: '5',
        title: 'Banner Promocional - Happy Hour',
        type: 'banner',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Hace 2 semanas',
        status: 'review',
        client: 'Bar Central'
      },
      {
        id: '6',
        title: 'Packaging - Producto Nuevo',
        type: 'other',
        thumbnail: '/api/placeholder/300/200',
        lastModified: 'Hace 3 semanas',
        status: 'draft',
        client: 'Empresa Alimentos'
      }
    ]
    
    setTimeout(() => {
      setProjects(mockProjects)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || project.type === filterType
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-600/20 border-green-600/30'
      case 'review': return 'text-yellow-400 bg-yellow-600/20 border-yellow-600/30'
      case 'draft': return 'text-gray-400 bg-gray-600/20 border-gray-600/30'
      default: return 'text-gray-400 bg-gray-600/20 border-gray-600/30'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'website': return 'Sitio Web'
      case 'logo': return 'Logo'
      case 'banner': return 'Banner'
      case 'social': return 'Social Media'
      case 'other': return 'Otro'
      default: return type
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completado'
      case 'review': return 'En Revisión'
      case 'draft': return 'Borrador'
      default: return status
    }
  }

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'completed').length,
    review: projects.filter(p => p.status === 'review').length,
    draft: projects.filter(p => p.status === 'draft').length
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Diseño - Canvas de Proyectos</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Upload className="w-4 h-4" />
            <span>Subir Proyecto</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Folder className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">{projectStats.total}</p>
              <p className="text-sm text-gray-300">Total Proyectos</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Eye className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">{projectStats.completed}</p>
              <p className="text-sm text-gray-300">Completados</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Filter className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-2xl font-bold text-white">{projectStats.review}</p>
              <p className="text-sm text-gray-300">En Revisión</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Plus className="w-6 h-6 text-gray-400" />
            <div>
              <p className="text-2xl font-bold text-white">{projectStats.draft}</p>
              <p className="text-sm text-gray-300">Borradores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
          />
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 text-white focus:outline-none focus:border-purple-500 transition-colors duration-200"
        >
          <option value="all">Todos los tipos</option>
          <option value="website">Sitios Web</option>
          <option value="logo">Logos</option>
          <option value="banner">Banners</option>
          <option value="social">Social Media</option>
          <option value="other">Otros</option>
        </select>

        <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <Palette className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300">No se encontraron proyectos</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:bg-white/10 transition-colors duration-200">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
                  <Palette className="w-12 h-12 text-purple-400" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white truncate">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{project.client}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{getTypeLabel(project.type)}</span>
                    <span>{project.lastModified}</span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button className="flex-1 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors duration-200">
                      <Eye className="w-4 h-4 mx-auto" />
                    </button>
                    <button className="flex-1 py-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors duration-200">
                      <Download className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="p-4 hover:bg-white/5 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-1">{project.client}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <span>{getTypeLabel(project.type)}</span>
                      <span>{project.lastModified}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors duration-200">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600/30 transition-colors duration-200">
                      <Download className="w-4 h-4" />
                    </button>
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
          <h3 className="font-semibold text-white mb-2">Conectar Almacenamiento</h3>
          <p className="text-sm text-gray-300">Google Drive, Dropbox, etc.</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Crear Nuevo Proyecto</h3>
          <p className="text-sm text-gray-300">Iniciar desde cero o plantilla</p>
        </button>
      </div>
    </div>
  )
}
