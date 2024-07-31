import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IInsurance extends Document {
  name: string
  path: string
  type: 'INSURANCE' | 'COMPANY'
  updatedAt: Date
}

const InsuranceSchema = new Schema<IInsurance>(
  {
    name: { type: String, required: true },
    path: { type: String },
    type: { type: String, enum: ['INSURANCE', 'COMPANY'] },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const InsuranceModel = defineMongooseModel<IInsurance>({
  name: 'insurances',
  schema: InsuranceSchema,
})

export { IInsurance, InsuranceSchema }
