import { KanbanBoard } from '../../../models/KanbanBoard'

export const getAllBoardsService = async () => {
  const boards = await KanbanBoard.find().catch(error => {
    throw new Error('Failed to fetch boards')
  })

  return boards
}
