import { KanbanColumn } from '../../../models/KanbanColumn'

export const getAllColumnsService = async () => {
  const columns = await KanbanColumn.find().catch(error => {
    throw new Error('Failed to fetch columns')
  })

  return columns
}
