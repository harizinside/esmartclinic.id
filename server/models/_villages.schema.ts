import type { Document, Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import SubdistrictModel from './_subdistricts.schema'

interface VillageProps {
  subdistrictId: Types.ObjectId
  code: string
  name: string
  poscode: number
  updatedAt: Date
}

const VillageSchema = new Schema(
  {
    subdistrictId: { type: 'ObjectId', ref: SubdistrictModel, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    poscode: { type: Number, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface VillageDocument extends Document, VillageProps { }
const VillageModel = model<VillageDocument>('_villages', VillageSchema)

export default VillageModel
export { VillageDocument, VillageSchema }
