import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface IcdProps extends Document {
  type: 'ICD10' | 'ICD9'
  code: string
  str: string
  sab: string
  status: boolean
  updatedAt: Date
}

const IcdSchema = new Schema(
  {
    type: { type: String, required: true },
    code: { type: String },
    str: { type: String },
    sab: { type: String },
    status: { type: Boolean, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface IcdDocument extends Document, IcdProps { }
const IcdModel = model<IcdDocument>('_icds', IcdSchema)

export default IcdModel
export { IcdDocument, IcdSchema }
