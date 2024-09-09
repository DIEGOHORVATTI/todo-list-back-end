import fs from 'node:fs'
import path from 'node:path'

export const deleteUploadService = async ({ id }) => {
  const filePath = path.join(__dirname, '../../../uploads', id)

  const file = await fs.promises.unlink(filePath)

  return file
}
