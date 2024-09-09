import { deleteBoardService as deleteTaskService } from './service'

export const deleteTaskController = async (req, res) => {
  await deleteTaskService({
    id: req.params?.id
  })

  return res.status(202).json({ message: 'Task deletado com sucesso' })
}
