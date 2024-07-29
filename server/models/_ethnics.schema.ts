import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IEthnic extends Document {
  value: string
  updatedAt: Date
}

const EthnicSchema = new Schema<IEthnic>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const EthnicModel = defineMongooseModel<IEthnic>({
  name: '_ethnics',
  schema: EthnicSchema,
})

export { IEthnic, EthnicSchema }
