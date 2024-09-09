import { Schema } from 'mongoose'
import { z } from 'zod'

import { dbConnection } from '../shared/connection-db'

import { setDefaultSettingsSchema } from '../shared'
import { collectionsData } from '../config'

export const BoardSchema = z.object({
  name: z.string(),
  ordered: z.array(z.string()),
  columnIds: z.array(z.string())
})

const SchemaModel = new Schema(
  {
    columnIds: { type: [{ type: Schema.Types.ObjectId, ref: collectionsData.KanbanColumn.name }], required: true },
    ordered: { type: [String], required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: collectionsData.KanbanBoard.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const KanbanBoard = dbConnection.model(collectionsData.KanbanBoard.name, SchemaModel)
