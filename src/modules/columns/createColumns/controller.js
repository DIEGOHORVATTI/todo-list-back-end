import { createColumnService } from './service'



export const createColumnController = async (req, res) => {
  const result = await createColumnService(req.body)

  return res.status(201).json({ items: result, message: 'Coluna criada com sucesso' })
}
