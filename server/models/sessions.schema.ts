import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { UserModel } from './users.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface ISession extends Document {
  userId: string
  ip: string
  agent: string
  payload: string
  activity: Date
}

const SessionSchema = new Schema<ISession>(
  {
    userId: { type: String, ref: UserModel },
    ip: { type: String },
    agent: { type: String },
    payload: { type: String },
    activity: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const sessionModel = defineMongooseModel<ISession>({
  name: 'sessions',
  schema: SessionSchema,
})

export { ISession, SessionSchema }
