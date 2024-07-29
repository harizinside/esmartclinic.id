import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IWorker extends Document {
  value: string
  updatedAt: Date
}

const WorkerSchema = new Schema<IWorker>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const WorkerModel = defineMongooseModel<IWorker>({
  name: '_workers',
  schema: WorkerSchema,
})

export { IWorker, WorkerSchema }
