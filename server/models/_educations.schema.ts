import { Schema, model, Document } from "mongoose";

interface IEducation {
  value: string;
  updatedAt: Date;
}

const EducationSchema = new Schema(
  {
    value: { type: String },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

interface EducationDocument extends Document, IEducation {}
const EducationModel = model<EducationDocument>("_educations", EducationSchema);

export default EducationModel;
export { EducationDocument, EducationSchema };
