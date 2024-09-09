import { createBoardService } from './service'



export const createBoardController = async (req, res) => {
  const result = await createBoardService(req.body)

  return res.status(201).json({ items: result, message: 'Quadro criado com sucesso' })
}
