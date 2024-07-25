import { Schema, model, Document } from "mongoose";

interface ITitle {
  value: string;
  updatedAt: Date;
}

const TitleSchema = new Schema(
  {
    value: { type: String },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

interface TitleDocument extends Document, ITitle {}
const TitleModel = model<TitleDocument>("_titles", TitleSchema);

export default TitleModel;
export { TitleDocument, TitleSchema };
