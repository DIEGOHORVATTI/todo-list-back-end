import { KanbanBoard } from '../../../models/KanbanBoard'

import * as Z from 'zod'

const deleteDomainSchema = Z.object({
  id: Z.string()
})

export const deleteBoardService = async (data) => {
  const { id } = deleteDomainSchema.parse(data)

  const boardExists = await KanbanBoard.findOne({ _id: id })

  if (!boardExists) throw new Error('Board not found')

  return KanbanBoard.deleteOne({ _id: id })
}
