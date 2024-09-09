import { getOneTaskService as getOneTaskService } from './service'

export const getOneTaskController = async (req, res) => {
  const task = await getOneTaskService(req.params?.id)

  res.status(200).json(task)
}
