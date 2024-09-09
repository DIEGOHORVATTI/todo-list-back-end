import { getAllColumnsService } from './service'



export const getAllColumnsController = async (req, res) => {
  const columns = await getAllColumnsService()

  return res.status(201).json(columns)
}
