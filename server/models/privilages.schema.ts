import type { Document, Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import MenuModel from './menus.schema'
import UserModel from './users.schema'

interface PrevilageProps extends Document {
  name: string
  category: 'dashboard' | 'users'
  menu: {
    menuId: Types.ObjectId
    create: boolean
    read: boolean
    update: boolean
    delete: boolean
    import: boolean
    export: boolean
  }[]
  users: {
    userId: Types.ObjectId
    status: boolean
  }[]
  group: string
  updatedAt: Date
}

const PrevilageSchema = new Schema(
  {
    name: { type: String },
    category: { type: String, enum: ['dashboard', 'users'] },
    menu: [{
      menuId: { type: 'ObjectId', ref: MenuModel, required: true },
      create: { type: Boolean, required: true, default: false },
      read: { type: Boolean, required: true, default: false },
      update: { type: Boolean, required: true, default: false },
      delete: { type: Boolean, required: true, default: false },
      import: { type: Boolean, required: true, default: false },
      export: { type: Boolean, required: true, default: false },
    }],
    users: [{
      userId: { type: 'ObjectId', ref: UserModel, required: true },
      status: { type: Boolean },
    }],
    group: { type: String },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface PrevilageDocument extends Document, PrevilageProps { }
const PrevilageModel = model<PrevilageDocument>('previlages', PrevilageSchema)

export default PrevilageModel
export { PrevilageDocument, PrevilageSchema }
