import { KanbanTask } from '../../../models/KanbanTask'

export const getOneTaskService = async (id) => {
  const task = await KanbanTask.findOne({ _id: id })

  if (!task) {
    throw new Error('Task not found')
  }

  return task
}
