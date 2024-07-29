import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IProvince extends Document {
  code: string
  name: string
  updatedAt: Date
}

const ProvinceSchema = new Schema<IProvince>(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const ProvinceModel = defineMongooseModel<IProvince>({
  name: '_provinces',
  schema: ProvinceSchema,
})

export { IProvince, ProvinceSchema }
