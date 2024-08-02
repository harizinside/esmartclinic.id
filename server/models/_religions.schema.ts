import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface ReligionProps {
  value: string
  updatedAt: Date
}

const ReligionSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface ReligionDocument extends Document, ReligionProps { }
const ReligionModel = model<ReligionDocument>('_religions', ReligionSchema)

export default ReligionModel
export { ReligionDocument, ReligionSchema }
