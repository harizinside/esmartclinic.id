import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IEducation extends Document {
  value: string
  updatedAt: Date
}

const EducationSchema = new Schema<IEducation>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const EducationModel = defineMongooseModel<IEducation>({
  name: '_educations',
  schema: EducationSchema,
})

export { IEducation, EducationSchema }
