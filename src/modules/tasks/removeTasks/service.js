import { KanbanTask } from '../../../models/KanbanTask'

export const deleteBoardService = async ({ id }) => {
  const boardExists = await KanbanTask.findOne({ _id: id })

  if (!boardExists) throw new Error('Task not found')

  return KanbanTask.deleteOne({ _id: id })
}
