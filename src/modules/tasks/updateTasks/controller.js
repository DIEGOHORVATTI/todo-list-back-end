import { updateTaskService as updateTaskService } from './service'

export const updateTaskController = async (req, res) => {
  const task = await updateTaskService({
    ...req.body,
    id: req.params?.id,
    userName: req.query?.userName
  })

  return res.status(201).json(task)
}
