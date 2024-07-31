import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { CityModel } from './_citys.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface ISubdistrict extends Document {
  cityId: Types.ObjectId
  code: string
  name: string
  updatedAt: Date
}

const SubdistrictSchema = new Schema<ISubdistrict>(
  {
    cityId: { type: 'ObjectId', ref: CityModel, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const SubdistrictModel = defineMongooseModel<ISubdistrict>({
  name: '_subdistricts',
  schema: SubdistrictSchema,
})

export { ISubdistrict, SubdistrictSchema }
