import type { Document, Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import CityModel from './_citys.schema'

interface SubdistrictProps extends Document {
  cityId: Types.ObjectId
  code: string
  name: string
  updatedAt: Date
}

const SubdistrictSchema = new Schema(
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

interface SubdistrictDocument extends Document, SubdistrictProps { }
const SubdistrictModel = model<SubdistrictDocument>('_subdistricts', SubdistrictSchema)

export default SubdistrictModel
export { SubdistrictDocument, SubdistrictSchema }
