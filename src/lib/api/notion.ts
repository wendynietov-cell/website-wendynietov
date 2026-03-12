import { Client } from '@notionhq/client'

// Tipos para la API de Notion
export interface NotionTask {
  id: string
  title: string
  description?: string
  status: string
  priority: string
  due_date?: string
  database_id: string
  database_name: string
}

export interface NotionDatabase {
  id: string
  name: string
  title: string
}

class NotionService {
  private client: Client | null = null

  constructor() {
    if (process.env.NOTION_ACCESS_TOKEN) {
      this.client = new Client({
        auth: process.env.NOTION_ACCESS_TOKEN,
      })
    }
  }

  // Verificar si el cliente está inicializado
  private isClientReady(): boolean {
    if (!this.client) {
      console.error('Cliente de Notion no inicializado. Verifica NOTION_ACCESS_TOKEN')
      return false
    }
    return true
  }

  // Obtener todas las bases de datos del usuario
  async getDatabases(): Promise<NotionDatabase[]> {
    if (!this.isClientReady()) return []

    try {
      const response = await this.client!.search({
        filter: {
          property: 'object',
          value: 'page',
        },
      })

      return response.results.map((db: any) => ({
        id: db.id,
        name: db.title?.[0]?.plain_text || 'Sin nombre',
        title: db.title?.[0]?.plain_text || 'Sin nombre',
      }))
    } catch (error) {
      console.error('Error al obtener bases de datos de Notion:', error)
      return []
    }
  }

  // Obtener tareas de una base de datos específica
  async getTasks(databaseId: string): Promise<NotionTask[]> {
    if (!this.isClientReady()) return []

    try {
      const response = await (this.client! as any).databases.query({
        database_id: databaseId,
      })

      // Obtener información de la base de datos
      const database = await (this.client! as any).databases.retrieve({
        database_id: databaseId,
      })

      const databaseName = (database as any).title?.[0]?.plain_text || 'Base de datos'

      return response.results.map((page: any) => {
        const properties = page.properties
        
        // Extraer título (usualmente está en una propiedad llamada 'Name' o 'Title')
        const titleProperty = properties.Name || properties.Title || properties.title || properties.name
        const title = titleProperty?.title?.[0]?.plain_text || 'Sin título'

        // Extraer descripción si existe
        const descProperty = properties.Description || properties.description || properties.Notes || properties.notes
        const description = descProperty?.rich_text?.[0]?.plain_text || ''

        // Extraer estado
        const statusProperty = properties.Status || properties.status || properties.Estado || properties.estado
        const status = statusProperty?.select?.name || 'pending'

        // Extraer prioridad
        const priorityProperty = properties.Priority || properties.priority || properties.Prioridad || properties.prioridad
        const priority = priorityProperty?.select?.name || 'medium'

        // Extraer fecha de vencimiento
        const dateProperty = properties['Due Date'] || properties.due_date || properties.Date || properties.date
        const dueDate = dateProperty?.date?.start || ''

        return {
          id: page.id,
          title,
          description,
          status,
          priority,
          due_date: dueDate,
          database_id: databaseId,
          database_name: databaseName,
        }
      })
    } catch (error) {
      console.error('Error al obtener tareas de Notion:', error)
      return []
    }
  }

  // Obtener todas las tareas de todas las bases de datos
  async getAllTasks(): Promise<NotionTask[]> {
    if (!this.isClientReady()) return []

    try {
      const databases = await this.getDatabases()
      const allTasks: NotionTask[] = []

      for (const database of databases) {
        const tasks = await this.getTasks(database.id)
        allTasks.push(...tasks)
      }

      return allTasks
    } catch (error) {
      console.error('Error al obtener todas las tareas de Notion:', error)
      return []
    }
  }

  // Crear una nueva tarea
  async createTask(databaseId: string, taskData: {
    title: string
    description?: string
    status?: string
    priority?: string
    due_date?: string
  }): Promise<NotionTask | null> {
    if (!this.isClientReady()) return null

    try {
      const properties: any = {
        Name: {
          title: [
            {
              text: {
                content: taskData.title,
              },
            },
          ],
        },
      }

      if (taskData.description) {
        properties.Description = {
          rich_text: [
            {
              text: {
                content: taskData.description,
              },
            },
          ],
        }
      }

      if (taskData.status) {
        properties.Status = {
          select: {
            name: taskData.status,
          },
        }
      }

      if (taskData.priority) {
        properties.Priority = {
          select: {
            name: taskData.priority,
          },
        }
      }

      if (taskData.due_date) {
        properties['Due Date'] = {
          date: {
            start: taskData.due_date,
          },
        }
      }

      const response = await (this.client! as any).pages.create({
        parent: {
          database_id: databaseId,
        },
        properties,
      })

      // Obtener información de la base de datos
      const database = await (this.client! as any).databases.retrieve({
        database_id: databaseId,
      })

      const databaseName = (database as any).title?.[0]?.plain_text || 'Base de datos'

      return {
        id: response.id,
        title: taskData.title,
        description: taskData.description || '',
        status: taskData.status || 'pending',
        priority: taskData.priority || 'medium',
        due_date: taskData.due_date || '',
        database_id: databaseId,
        database_name: databaseName,
      }
    } catch (error) {
      console.error('Error al crear tarea en Notion:', error)
      return null
    }
  }

  // Actualizar una tarea existente
  async updateTask(pageId: string, taskData: {
    title?: string
    description?: string
    status?: string
    priority?: string
    due_date?: string
  }): Promise<boolean> {
    if (!this.isClientReady()) return false

    try {
      const properties: any = {}

      if (taskData.title) {
        properties.Name = {
          title: [
            {
              text: {
                content: taskData.title,
              },
            },
          ],
        }
      }

      if (taskData.description !== undefined) {
        properties.Description = {
          rich_text: [
            {
              text: {
                content: taskData.description,
              },
            },
          ],
        }
      }

      if (taskData.status) {
        properties.Status = {
          select: {
            name: taskData.status,
          },
        }
      }

      if (taskData.priority) {
        properties.Priority = {
          select: {
            name: taskData.priority,
          },
        }
      }

      if (taskData.due_date !== undefined) {
        properties['Due Date'] = {
          date: taskData.due_date ? { start: taskData.due_date } : null,
        }
      }

      await (this.client! as any).pages.update({
        page_id: pageId,
        properties,
      })

      return true
    } catch (error) {
      console.error('Error al actualizar tarea en Notion:', error)
      return false
    }
  }
}

// Exportar una instancia única del servicio
export const notionService = new NotionService()

// Funciones helper para uso en componentes
export const getNotionTasks = async () => {
  return await notionService.getAllTasks()
}

export const getNotionDatabases = async () => {
  return await notionService.getDatabases()
}

export const createNotionTask = async (databaseId: string, taskData: any) => {
  return await notionService.createTask(databaseId, taskData)
}

export const updateNotionTask = async (pageId: string, taskData: any) => {
  return await notionService.updateTask(pageId, taskData)
}
