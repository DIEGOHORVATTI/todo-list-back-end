
import { deleteUploadService as deleteTaskService } from './service'

export const deleteUploadController = async (req, res) => {
  await deleteTaskService({
    id: req.params?.id
  })

  return res.status(202).json({ message: 'Arquivo deletado com sucesso' })
}
