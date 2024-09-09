import { Schema } from 'mongoose'


import { setDefaultSettingsSchema } from '../shared'

import { collectionsData } from '../config'

import { z } from 'zod'
import { dbConnection } from '../shared/connection-db'

export const TaskSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  archived: z.boolean(),
  files: z
    .array(
      z.object({
        fieldname: z.string(),
        originalname: z.string(),
        encoding: z.string(),
        mimetype: z.string(),
        destination: z.string(),
        filename: z.string(),
        path: z.string(),
        size: z.number(),
        name: z.string(),
        type: z.string(),
        preview: z.string()
      })
    )
    .optional(),
  priority: z.string(),
  description: z.string().min(1, 'Description is required'),
  dueDate: z.string().min(1, 'Due date is required')
})

const fileSchema = new Schema({
  fieldname: { type: String, required: true },
  originalname: { type: String, required: true },
  encoding: { type: String, required: true },
  mimetype: { type: String, required: true },
  destination: { type: String, required: true },
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  preview: { type: String, required: true }
})

const SchemaModel = new Schema(
  {
    name: { type: String, required: true },
    files: { type: [fileSchema] },
    priority: { type: String, required: true },
    archived: { type: Boolean, required: true, default: false },
    description: { type: String, required: true },
    dueDate: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: collectionsData.KanbanTask.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const KanbanTask = dbConnection.model(collectionsData.KanbanTask.name, SchemaModel)
