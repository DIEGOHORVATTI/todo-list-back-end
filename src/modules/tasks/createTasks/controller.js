import { createTasksService } from './service'



export const createTaskController = async (req, res) => {
  const result = await createTasksService({ ...req.body })

  return res.status(201).json(result)
}
