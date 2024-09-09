import { KanbanTask, TaskSchema } from '../../../models/KanbanTask'

export const createTasksService = async (data) => {
  const taskData = TaskSchema.parse(data)

  const task = new KanbanTask(taskData)

  const newTask = await task.save().catch(() => {
    throw new Error('Failed to create task')
  })

  return newTask
}
