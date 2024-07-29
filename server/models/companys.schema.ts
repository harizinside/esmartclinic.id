import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IComany extends Document {
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

const ComanySchema = new Schema<IComany>(
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

export const ComanyModel = defineMongooseModel<IComany>({
  name: '_comanys',
  schema: ComanySchema,
})

export { IComany, ComanySchema }
