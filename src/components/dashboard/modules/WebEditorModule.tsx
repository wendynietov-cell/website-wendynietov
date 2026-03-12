'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Save, Eye, Edit, Settings, Globe, Palette, Type, Layout } from 'lucide-react'

// Importar el componente de administración existente
import AdminPage from '@/app/admin/page'

export default function WebEditorModule() {
  const [isEditing, setIsEditing] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Configuración Web</h1>
          <p className="text-gray-300 mt-2">Edita el contenido y diseño de tu sitio web personal</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              previewMode 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{previewMode ? 'Modo Edición' : 'Vista Previa'}</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Globe className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-lg font-bold text-white">Sitio Web</p>
              <p className="text-sm text-gray-300">wendynieto.com</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Layout className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-lg font-bold text-white">4 Secciones</p>
              <p className="text-sm text-gray-300">Activas</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Type className="w-6 h-6 text-pink-400" />
            <div>
              <p className="text-lg font-bold text-white">Contenido</p>
              <p className="text-sm text-gray-300">Actualizado</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Settings className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-lg font-bold text-white">Configurado</p>
              <p className="text-sm text-gray-300">100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Container */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Editor de Contenido</h2>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors duration-200">
                <Palette className="w-4 h-4" />
                <span className="text-sm">Estilos</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-200">
                <Layout className="w-4 h-4" />
                <span className="text-sm">Layout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {previewMode ? (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border border-green-600/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Eye className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-white">Vista Previa Activa</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Estás viendo cómo se verá tu sitio web para los visitantes. 
                  Los cambios se reflejarán en tiempo real.
                </p>
              </div>
              
              {/* Vista previa del sitio */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden" style={{ minHeight: '600px' }}>
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-white text-sm">wendynieto.com</span>
                  </div>
                </div>
                <div className="p-8 bg-gray-50">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">WENDY NIETO</h1>
                    <p className="text-xl text-gray-600 mb-8">Estratega de Plataformas y Crecimiento Tech</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-gray-900 mb-2">Servicios</h3>
                        <p className="text-gray-600">Consultoría y desarrollo</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-gray-900 mb-2">Proyectos</h3>
                        <p className="text-gray-600">Casos de éxito</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
                        <p className="text-gray-600">Conectemos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-4 border border-purple-600/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Edit className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Modo Edición</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Utiliza el formulario a continuación para editar el contenido de tu sitio web.
                  Los cambios se guardarán automáticamente.
                </p>
              </div>
              
              {/* Aquí va el formulario de administración existente */}
              <div className="bg-white/5 rounded-lg p-4">
                <AdminPage />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Ver Sitio Web</h3>
          <p className="text-sm text-gray-300">Abrir en nueva pestaña</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">SEO y Analytics</h3>
          <p className="text-sm text-gray-300">Optimización y métricas</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Backup</h3>
          <p className="text-sm text-gray-300">Exportar contenido</p>
        </button>
      </div>
    </div>
  )
}
