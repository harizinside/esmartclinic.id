import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IBank extends Document {
  value: string
  updatedAt: Date
}

const BankSchema = new Schema<IBank>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const BankModel = defineMongooseModel<IBank>({
  name: '_banks',
  schema: BankSchema,
})

export { IBank, BankSchema }
