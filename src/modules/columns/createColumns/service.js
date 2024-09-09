import { KanbanColumn, ColumnSchema } from '../../../models/KanbanColumn'

export const createColumnService = async (data) => {
  const columnData = ColumnSchema.parse(data)

  const column = new KanbanColumn(columnData)

  const newBoard = await column.save().catch(() => {
    throw new Error('Failed to create column')
  })

  return newBoard
}
