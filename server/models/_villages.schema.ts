import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { SubdistrictModel } from './_subdistricts'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IVillage extends Document {
  subdistrictId: Types.ObjectId
  code: string
  name: string
  updatedAt: Date
}

const VillageSchema = new Schema<IVillage>(
  {
    subdistrictId: { type: 'ObjectId', ref: SubdistrictModel, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const VillageModel = defineMongooseModel<IVillage>({
  name: '_villages',
  schema: VillageSchema,
})

export { IVillage, VillageSchema }
