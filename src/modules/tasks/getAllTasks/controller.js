import { getAllTasksService as getAllTasksService } from './service'

export const getAllTasksController = async (req, res) => {
  const tasks = await getAllTasksService()

  return res.status(201).json(tasks)
}
