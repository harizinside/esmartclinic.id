import { Schema, model, Document } from "mongoose";

interface IReligion {
  value: string;
  updatedAt: Date;
}

const ReligionSchema = new Schema(
  {
    value: { type: String },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

interface ReligionDocument extends Document, IReligion {}
const ReligionModel = model<ReligionDocument>("_religions", ReligionSchema);

export default ReligionModel;
export { ReligionDocument, ReligionSchema };
