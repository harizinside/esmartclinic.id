import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface ComanyProps extends Document {
  type: 'PT' | 'CV' | 'Firma' | null
  name: string
  phone: string
  email: string
  address: string
  npwp: {
    value: string | null
    path: string | null
  }
  nib: {
    value: string | null
    path: string | null
  }
  sk: {
    value: string | null
    path: string | null
  }
  sip: {
    value: string | null
    path: string | null
  }
  akta: string | null
  kbli: string | null
  bank: {
    id: string
    account: string
    name: string
  }
  updatedAt: Date
}

const ComanySchema = new Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface ComanyDocument extends Document, ComanyProps { }
const ComanyModel = model<ComanyDocument>('comanys', ComanySchema)

export default ComanyModel
export { ComanyDocument, ComanySchema }
