import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
  await mongoose.connect(process.env.MONGODB_URI!)
})
