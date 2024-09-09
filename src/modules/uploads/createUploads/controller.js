import { createUploadsService } from './service'

export const createUploadsController = async (req, res) => {
  const files = req.files

  const result = await createUploadsService({ files })

  return res.status(201).json(result)
}
