export const HOST_API = 'http://localhost:8001'

export const mongoUrl = 'mongodb://root:password@127.0.0.1:27017/admin'

export const collectionsData = {
  KanbanTask: {
    name: 'KanbanTask',
    collection: 'kanban_tasks'
  },
  KanbanBoard: {
    name: 'KanbanBoard',
    collection: 'kanban_boards'
  },
  KanbanColumn: {
    name: 'KanbanColumn',
    collection: 'kanban_columns'
  },
  KanbanHistory: {
    name: 'KanbanHistory',
    collection: 'histories_models'
  },
  Notifications: {
    name: 'Notifications',
    collection: 'notifications'
  },
  User: {
    name: 'User',
    collection: 'users'
  }
}
