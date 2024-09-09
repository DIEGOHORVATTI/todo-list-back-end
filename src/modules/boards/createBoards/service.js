import { KanbanBoard, BoardSchema } from '../../../models/KanbanBoard'

export const createBoardService = async (data) => {
  const boardData = BoardSchema.parse(data)

  const board = new KanbanBoard(boardData)

  const newBoard = await board.save().catch(() => {
    throw new Error('Failed to create board')
  })

  return newBoard
}
