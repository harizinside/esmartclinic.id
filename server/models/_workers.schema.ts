import { defineMongooseModel } from "#nuxt/mongoose";
import { Schema, Document, Model } from "mongoose";

interface IWorker extends Document {
  value: string;
  updatedAt: Date;
}

interface IWorkerModel extends Model<IWorker> {
  changeSex(): string;
}

const WorkerSchema = new Schema<IWorker>(
  {
    value: { type: String, required: true },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

WorkerSchema.statics.changeSex = async function (params: boolean) {
  const valueAwal = await this.aggregate();
};

export const WorkerModel = defineMongooseModel<IWorkerModel>({
  name: "_workers",
  schema: WorkerSchema,
});

export { IWorker, WorkerSchema };
