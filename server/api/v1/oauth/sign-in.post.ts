import { z } from 'zod'
import { compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserModel } from '@/server/models/users.schema'

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean(),
  })

  const body = await readValidatedBody(event, userSchema.parse)
  const user = await UserModel.findOne({ 'email.value': body.email }, 'name path password')
  if (!user) {
    return createError({
      status: 400,
      statusMessage: 'Email not found',
      message: 'Invalid user input',
      data: { field: 'email' },
    })
  }

  const auth = compareSync(body.password, user.password!)
  if (!auth) {
    return createError({
      status: 400,
      statusMessage: 'Password not match with email provide',
      message: 'Invalid user input',
      data: [{ field: 'password' }],
    })
  }

  const token = jwt.sign({ userId: user._id }, process.env.KEY!, {
    expiresIn: '1h',
  })

  if (body.remember) {
    await UserModel.updateOne({ _id: user._id }, { rememberToken: token })
  }

  return { status: true, token: token, user: user }
})
