import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean(),
  })

  const body = await readValidatedBody(event, userSchema.parse)
})
