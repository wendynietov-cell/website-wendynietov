'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, MapPin, Video, Users, Plus } from 'lucide-react'

interface Meeting {
  id: string
  title: string
  time: string
  duration: string
  type: 'virtual' | 'in-person'
  attendees: number
  location?: string
  description: string
}

export default function CalendarModule() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    // Simulación de carga de reuniones desde Google Calendar
    const mockMeetings: Meeting[] = [
      {
        id: '1',
        title: 'Reunión de estrategia con cliente',
        time: '09:00',
        duration: '1h',
        type: 'virtual',
        attendees: 4,
        description: 'Discutir propuesta de marketing digital'
      },
      {
        id: '2',
        title: 'Review de diseño - Proyecto Hotel',
        time: '11:30',
        duration: '45min',
        type: 'in-person',
        attendees: 2,
        location: 'Oficina Central',
        description: 'Revisar mockups del nuevo sitio web'
      },
      {
        id: '3',
        title: 'Llamada de seguimiento - Restaurante',
        time: '15:00',
        duration: '30min',
        type: 'virtual',
        attendees: 3,
        description: 'Estado actual de la campaña'
      },
      {
        id: '4',
        title: 'Brainstorming - Nuevo Proyecto',
        time: '16:30',
        duration: '1.5h',
        type: 'in-person',
        attendees: 6,
        location: 'Sala de Reuniones B',
        description: 'Ideación para campaña de primavera'
      }
    ]
    
    setTimeout(() => {
      setMeetings(mockMeetings)
      setLoading(false)
    }, 1000)
  }, [])

  const todayMeetings = meetings.filter(meeting => {
    // Simulación: todas las reuniones son de hoy
    return true
  })

  const upcomingMeetings = todayMeetings.filter(meeting => {
    const currentTime = new Date()
    const [hours, minutes] = meeting.time.split(':')
    const meetingTime = new Date()
    meetingTime.setHours(parseInt(hours), parseInt(minutes))
    return meetingTime > currentTime
  })

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Agenda - Google Calendar</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
          <Plus className="w-4 h-4" />
          <span>Nueva Reunión</span>
        </button>
      </div>

      {/* Calendar Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-blue-400" />
            <div>
              <p className="text-2xl font-bold text-white">{todayMeetings.length}</p>
              <p className="text-sm text-gray-300">Reuniones Hoy</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">{upcomingMeetings.length}</p>
              <p className="text-sm text-gray-300">Próximas</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <Video className="w-6 h-6 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">{todayMeetings.filter(m => m.type === 'virtual').length}</p>
              <p className="text-sm text-gray-300">Virtuales</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-lg rounded-lg p-4 border border-white/10">
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-orange-400" />
            <div>
              <p className="text-2xl font-bold text-white">{todayMeetings.filter(m => m.type === 'in-person').length}</p>
              <p className="text-sm text-gray-300">Presenciales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline View */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white mb-2">Hoy - {selectedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
          <p className="text-gray-300">{todayMeetings.length} reuniones programadas</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
          </div>
        ) : todayMeetings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300">No hay reuniones programadas para hoy</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {todayMeetings
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((meeting) => (
                <div key={meeting.id} className="p-6 hover:bg-white/5 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 text-center">
                        <p className="text-lg font-bold text-purple-400">{formatTime(meeting.time)}</p>
                        <p className="text-xs text-gray-400">{meeting.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{meeting.title}</h3>
                        <div className="flex items-center space-x-2">
                          {meeting.type === 'virtual' ? (
                            <Video className="w-4 h-4 text-green-400" />
                          ) : (
                            <MapPin className="w-4 h-4 text-orange-400" />
                          )}
                          <span className="flex items-center space-x-1 text-sm text-gray-400">
                            <Users className="w-3 h-3" />
                            <span>{meeting.attendees}</span>
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-2">{meeting.description}</p>
                      
                      {meeting.location && (
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <MapPin className="w-3 h-3" />
                          <span>{meeting.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Ver Semana</h3>
          <p className="text-sm text-gray-300">Vista semanal completa</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Abrir Google Calendar</h3>
          <p className="text-sm text-gray-300">Ir al calendario completo</p>
        </button>
        <button className="p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
          <h3 className="font-semibold text-white mb-2">Bloquear Tiempo</h3>
          <p className="text-sm text-gray-300">Añadir tiempo专注</p>
        </button>
      </div>
    </div>
  )
}
