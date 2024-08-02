import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface EducationProps extends Document {
  value: string
  updatedAt: Date
}

const EducationSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface EducationDocument extends Document, EducationProps { }
const EducationModel = model<EducationDocument>('_educations', EducationSchema)

export default EducationModel
export { EducationDocument, EducationSchema }
