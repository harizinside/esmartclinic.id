import { Schema, model, Document } from "mongoose";

interface IEthnic {
  value: string;
  updatedAt: Date;
}

const EthnicSchema = new Schema(
  {
    value: { type: String },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

interface EthnicDocument extends Document, IEthnic {}
const EthnicModel = model<EthnicDocument>("_ethnics", EthnicSchema);

export default EthnicModel;
export { EthnicDocument, EthnicSchema };
