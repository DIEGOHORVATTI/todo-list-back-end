import { updateBoardService as updateColumnService } from './service'



export const updateColumnsController = async (req, res) => {
  const column = await updateColumnService({
    id: req.params?.id,
    ...req.body
  })

  return res.status(201).json(column)
}
