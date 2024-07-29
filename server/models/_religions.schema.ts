import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IReligion extends Document {
  value: string
  updatedAt: Date
}

const ReligionSchema = new Schema<IReligion>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const ReligionModel = defineMongooseModel<IReligion>({
  name: '_religions',
  schema: ReligionSchema,
})

export { IReligion, ReligionSchema }
