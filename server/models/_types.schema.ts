import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IType extends Document {
  value: string
  updatedAt: Date
}

const TypeSchema = new Schema<IType>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const TypeModel = defineMongooseModel<IType>({
  name: '_types',
  schema: TypeSchema,
})

export { IType, TypeSchema }
