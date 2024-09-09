import { KanbanBoard, BoardSchema } from '../../../models/KanbanBoard'

export const updateBoardService = async (data) => {
  const { name, columnIds, ordered } = BoardSchema.parse(data)

  const board = await KanbanBoard.findById(data.id)

  if (!board) {
    throw new Error('Board not found')
  }

  if (name) {
    const existingBoard = await KanbanBoard.findOne({ name })

    if (existingBoard && existingBoard.id !== data.id) {
      throw new HTTPError('Board with this name already exists', 409)
    }

    board.name = name
  }

  Object.assign(board, { name, columnIds, ordered })

  await board.save().catch(error => {
    throw new HTTPError('Failed to update board', 500)
  })

  return board
}
