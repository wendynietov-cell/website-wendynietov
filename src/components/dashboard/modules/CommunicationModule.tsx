'use client'

import { useState, useEffect } from 'react'
import { Mail, Send, RefreshCw, Search, Star, Clock, AlertCircle } from 'lucide-react'

interface Email {
  id: string
  subject: string
  sender: string
  preview: string
  timestamp: string
  isUrgent: boolean
  isStarred: boolean
}

export default function CommunicationModule() {
  const [emails, setEmails] = useState<Email[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Simulación de carga de correos
    const mockEmails: Email[] = [
      {
        id: '1',
        subject: 'Re: Propuesta de colaboración - Urgente',
        sender: 'cliente@empresa.com',
        preview: 'Necesito revisar los términos del contrato antes de mañana...',
        timestamp: 'Hace 15 min',
        isUrgent: true,
        isStarred: false
      },
      {
        id: '2',
        subject: 'Reunión de seguimiento del proyecto',
        sender: 'equipo@agencia.com',
        preview: 'Confirmo la reunión para hoy a las 3pm para discutir...',
        timestamp: 'Hace 1 hora',
        isUrgent: false,
        isStarred: true
      },
      {
        id: '3',
        subject: 'Factura vencida - Recordatorio',
        sender: 'facturacion@servicio.com',
        preview: 'Le recordamos que su factura está por vencer...',
        timestamp: 'Hace 2 horas',
        isUrgent: true,
        isStarred: false
      }
    ]
    
    setTimeout(() => {
      setEmails(mockEmails)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredEmails = emails.filter(email =>
    email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.preview.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const refreshEmails = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Comunicación</h1>
        <button
          onClick={refreshEmails}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white hover:bg-white/20 transition-colors duration-200"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>Actualizar</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar correos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />
      </div>

      {/* Email Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <div>
              <p className="text-2xl font-bold text-white">{emails.filter(e => e.isUrgent).length}</p>
              <p className="text-sm text-gray-300">Urgentes</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Star className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-2xl font-bold text-white">{emails.filter(e => e.isStarred).length}</p>
              <p className="text-sm text-gray-300">Destacados</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">{emails.length}</p>
              <p className="text-sm text-gray-300">Total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
          </div>
        ) : filteredEmails.length === 0 ? (
          <div className="text-center py-12">
            <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300">No se encontraron correos</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredEmails.map((email) => (
              <div
                key={email.id}
                className="p-4 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-white">{email.subject}</h3>
                      {email.isUrgent && (
                        <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded-full border border-red-600/30">
                          Urgente
                        </span>
                      )}
                      {email.isStarred && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mb-1">{email.sender}</p>
                    <p className="text-sm text-gray-400 line-clamp-1">{email.preview}</p>
                  </div>
                  <span className="text-xs text-gray-400 ml-4">{email.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <Send className="w-5 h-5" />
          <span>Redactar Nuevo Email</span>
        </button>
      </div>
    </div>
  )
}
