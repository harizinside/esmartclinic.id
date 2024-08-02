import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface BankProps {
  value: string
  updatedAt: Date
}

const BankSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface BankDocument extends Document, BankProps { }
const BankModel = model<BankDocument>('_banks', BankSchema)

export default BankModel
export { BankDocument, BankSchema }
