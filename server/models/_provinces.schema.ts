import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface ProvinceProps {
  code: string
  name: string
  updatedAt: Date
}

const ProvinceSchema = new Schema(
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

interface ProvinceDocument extends Document, ProvinceProps { }
const ProvinceModel = model< ProvinceDocument>('_provinces', ProvinceSchema)

export default ProvinceModel
export { ProvinceDocument, ProvinceSchema }
