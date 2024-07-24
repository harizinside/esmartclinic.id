import WorkerModel from "../models/_workers";

export default defineEventHandler(async (event) => {
  try {
    const result = await WorkerModel.find();
    return result;
  } catch (error) {
    throw error;
  }
});
