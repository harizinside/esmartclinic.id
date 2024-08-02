import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'
import UserModel from './users.schema'

interface SessionProps extends Document {
  userId: string
  ip: string
  agent: string
  payload: string
  activity: Date
}

const SessionSchema = new Schema(
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

interface SessionDocument extends Document, SessionProps { }
const SessionModel = model<SessionDocument>('sessions', SessionSchema)

export default SessionModel
export { SessionDocument, SessionSchema }
