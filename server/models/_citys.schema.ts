import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { ProvinceModel } from './_provinces.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface ICity extends Document {
  provinceId: Types.ObjectId
  code: string
  name: string
  updatedAt: Date
}

const CitySchema = new Schema<ICity>(
  {
    provinceId: { type: 'ObjectId', ref: ProvinceModel, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const CityModel = defineMongooseModel<ICity>({
  name: '_citys',
  schema: CitySchema,
})

export { ICity, CitySchema }
