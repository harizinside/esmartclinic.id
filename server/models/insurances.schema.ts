import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface InsuranceProps {
  name: string
  path: string
  type: 'INSURANCE' | 'COMPANY'
  updatedAt: Date
}

const InsuranceSchema = new Schema(
  {
    name: { type: String, required: true },
    path: { type: String },
    type: { type: String, enum: ['INSURANCE', 'COMPANY'] },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface InsuranceDocument extends Document, InsuranceProps { }
const InsuranceModel = model<InsuranceDocument>('insurances', InsuranceSchema)

export default InsuranceModel
export { InsuranceDocument, InsuranceSchema }
