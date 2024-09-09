import { updateBoardService } from './service'

export const updateBoardController = async (req, res) => {
  const board = await updateBoardService({
    id: req.params?.id,
    ...req.body
  })

  return res.status(201).json(board)
}
