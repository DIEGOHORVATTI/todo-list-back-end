import fs from 'fs'
import path from 'path'

export const deleteUploadService = async ({ id }) => {
  const filePath = path.join(__dirname, '../../../uploads', id)

  const file = await fs.promises.unlink(filePath)

  return file
}
