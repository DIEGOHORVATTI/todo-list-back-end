import { updateBoardService } from './service'

import type { RequestHandler } from 'express'

export const updateBoardController: RequestHandler = async (req, res) => {
  const board = await updateBoardService({
    id: req.params?.id,
    ...req.body
  })

  return res.status(201).json(board)
}
