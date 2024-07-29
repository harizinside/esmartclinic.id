import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IMarital extends Document {
  value: string
  updatedAt: Date
}

const MaritalSchema = new Schema<IMarital>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const MaritalModel = defineMongooseModel<IMarital>({
  name: '_maritals',
  schema: MaritalSchema,
})

export { IMarital, MaritalSchema }
