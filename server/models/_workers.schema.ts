import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface WorkerProps {
  value: string
  updatedAt: Date
}

const WorkerSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface WorkerDocument extends Document, WorkerProps { }
const WorkerModel = model<WorkerDocument>('_workers', WorkerSchema)

export default WorkerModel
export { WorkerDocument, WorkerSchema }
