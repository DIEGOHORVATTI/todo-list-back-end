import { getUploadService as deleteTaskService } from './service'



export const getOneUploadController = async (req, res) => {
  const file = await deleteTaskService({
    id: req.params?.id
  })

  return res.status(202).sendFile(file)
}
