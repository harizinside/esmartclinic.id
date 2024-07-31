import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const saltRounds = 10
  const myPlaintextPassword = 'kmzway87aa'

  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(myPlaintextPassword, salt)

  const xxx = bcrypt.compareSync('asasas', hash)
  return { hash, xxx }
})
