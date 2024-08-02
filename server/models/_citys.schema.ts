import type { Document, Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import ProvinceModel from './_provinces.schema'

interface CityProps {
  provinceId: Types.ObjectId
  code: string
  name: string
  updatedAt: Date
}

const CitySchema = new Schema(
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

interface CityDocument extends Document, CityProps { }
const CityModel = model<CityDocument>('_citys', CitySchema)

export default CityModel
export { CityDocument, CitySchema }
