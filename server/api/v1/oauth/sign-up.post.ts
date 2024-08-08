import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'node:crypto'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    password: z.string().min(6),
  })

  const body = await readValidatedBody(event, userSchema.parse)
  const result = await encryptPassword(body.password, process.env.KEY!)
  return result
})

/**
 * Encrypt a password using AES-192-CBC.
 * @param {string} password - The password to encrypt.
 * @param {string} secret - The secret key to use for encryption.
 * @returns {string} - The encrypted password.
 */

const encryptPassword = async (password: string, secret: string) => {
  const key = scryptSync(secret, 'salt', 24) // AES-192 requires a 24-byte key
  const iv = randomBytes(16) // Initialization vector for AES-192-CBC

  const cipher = createCipheriv('aes-192-gcm', key, iv)
  let encrypted = cipher.update(password, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return iv.toString('hex') + ':' + encrypted
}

/**
 * Verify a password against an encrypted password using AES-192-CBC.
 * @param {string} password - The password to verify.
 * @param {string} encryptedPassword - The stored encrypted password.
 * @param {string} secret - The secret key to use for decryption.
 * @returns {boolean} - True if the password is correct, false otherwise.
 */
const verifyPassword = async (password: string, encryptedPassword: string, secret: string) => {
  const [ivHex, encrypted] = encryptedPassword.split(':')
  const iv = Buffer.from(ivHex, 'hex')
  const key = scryptSync(secret, 'salt', 24)

  const decipher = createDecipheriv('aes-192-cbc', key, iv)
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted === password
}
