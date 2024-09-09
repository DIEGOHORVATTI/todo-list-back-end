import { KanbanTask, TaskSchema } from '../../../models/KanbanTask'

export const updateTaskService = async (data) => {
  const { name, archived, priority, files, description, dueDate } = TaskSchema.parse(data)

  const task = await KanbanTask.findById(data.id)

  if (!task) {
    throw new Error('Task not found')
  }

  Object.assign(task, {
    name,
    files,
    archived,
    priority,
    description,
    dueDate
  })

  await task.save().catch(() => {
    throw new Error('Failed to update task')
  })

  return task
}
