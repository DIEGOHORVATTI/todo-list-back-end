import { HTTPError } from '@/errors'

import { KanbanBoard } from '@/models/KanbanBoard'

export const getAllBoardsService = async () => {
  const boards = await KanbanBoard.find().catch(error => {
    throw new HTTPError('Failed to fetch boards', 500)
  })

  return boards
}
