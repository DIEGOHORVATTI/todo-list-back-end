import { getAllBoardsService } from './service'

export const getAllBoardsController = async (req, res) => {
  const boards = await getAllBoardsService()

  return res.status(201).json(boards)
}
