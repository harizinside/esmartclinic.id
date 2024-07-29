import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface ITitle extends Document {
  value: string
  updatedAt: Date
}

const TitleSchema = new Schema<ITitle>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const TitleModel = defineMongooseModel<ITitle>({
  name: '_titles',
  schema: TitleSchema,
})

export { ITitle, TitleSchema }
