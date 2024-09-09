import { KanbanColumn, ColumnSchema } from '../../../models/KanbanColumn'

export const updateBoardService = async (data) => {
  const { name, boardId, archived, taskIds } = ColumnSchema.parse(data)

  const column = await KanbanColumn.findById(data.id)

  if (!column) {
    throw new Error('Column not found')
  }

  Object.assign(column, { name, boardId, archived, taskIds })

  await column.save().catch(error => {
    throw new Error('Failed to update column')
  })

  return column
}
