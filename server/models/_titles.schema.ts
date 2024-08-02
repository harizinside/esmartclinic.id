import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface TitleProps {
  value: string
  updatedAt: Date
}

const TitleSchema = new Schema(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface TitleDocument extends Document, TitleProps { }
const TitleModel = model<TitleDocument>('_titles', TitleSchema)

export default TitleModel
export { TitleDocument, TitleSchema }
