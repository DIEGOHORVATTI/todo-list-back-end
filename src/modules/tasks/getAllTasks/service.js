import { KanbanTask } from '../../../models/KanbanTask'

export const getAllTasksService = async () => {
  const tasks = await KanbanTask.find().catch(error => {
    throw new Error('Failed to fetch tasks')
  })

  return tasks
}
