import { HTTPError } from '@/errors'

import { IKanbanTask, KanbanTask, TaskSchema } from '@/models/KanbanTask'

export const updateTaskService = async (data: IKanbanTask & { userName: string }) => {
  const { name, archived, priority, categories, files, description, dueDate } = TaskSchema.parse(data)

  const task = await KanbanTask.findById(data.id)

  if (!task) {
    throw new HTTPError('Task not found', 404)
  }

  Object.assign(task, {
    name,
    files,
    archived,
    priority,
    categories,
    description,
    dueDate
  })

  await task.save().catch(() => {
    throw new HTTPError('Failed to update task', 500)
  })

  return task
}
