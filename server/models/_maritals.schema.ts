import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface MaritalProps extends Document {
  value: string
  updatedAt: Date
}

const MaritalSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface MaritalDocument extends Document, MaritalProps { }
const MaritalModel = model<MaritalDocument>('_maritals', MaritalSchema)

export default MaritalModel
export { MaritalDocument, MaritalSchema }
