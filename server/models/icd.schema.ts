import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IIcd extends Document {
  type: 'ICD10' | 'ICD9'
  code: string
  str: string
  sab: string
  status: boolean
  updatedAt: Date
}

const IcdSchema = new Schema<IIcd>(
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

export const IcdModel = defineMongooseModel<IIcd>({
  name: '_icds',
  schema: IcdSchema,
})

export { IIcd, IcdSchema }
