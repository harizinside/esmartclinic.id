import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface EthnicProps {
  value: string
  updatedAt: Date
}

const EthnicSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface EthnicDocument extends Document, EthnicProps { }
const EthnicModel = model<EthnicDocument>('_ethnics', EthnicSchema)

export default EthnicModel
export { EthnicDocument, EthnicSchema }
