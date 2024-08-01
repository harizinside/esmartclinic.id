import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { MenuModel } from './menus.schema'
import { UserModel } from './users.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IPrevilage extends Document {
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

const PrevilageSchema = new Schema<IPrevilage>(
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

export const PrevilageModel = defineMongooseModel<IPrevilage>({
  name: 'previlages',
  schema: PrevilageSchema,
})

export { IPrevilage, PrevilageSchema }
