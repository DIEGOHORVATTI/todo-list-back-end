import { azePlastDB } from '../shared/connection-db'
import { setDefaultSettingsSchema } from '../shared'

import { collectionsData } from '../config'

import { Schema } from 'mongoose'
import { z } from 'zod'

export const ColumnSchema = z.object({
  name: z.string(),
  boardId: z.string(),
  archived: z.boolean(),
  taskIds: z.array(z.string())
})

const SchemaModel = new Schema(
  {
    name: { type: String, required: true },
    boardId: { type: Schema.Types.ObjectId, ref: collectionsData.KanbanBoard.name, required: true },
    taskIds: [{ type: Schema.Types.ObjectId, ref: collectionsData.KanbanTask.name }],
    archived: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
    collection: collectionsData.KanbanColumn.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const KanbanColumn = azePlastDB.model(collectionsData.KanbanColumn.name, SchemaModel)
