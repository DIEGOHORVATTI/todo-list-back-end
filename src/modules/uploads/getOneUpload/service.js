import path from 'path'

export const getUploadService = async ({ id }) => {
  const filePath = path.join(__dirname, '../../../uploads', id)

  return filePath
}
