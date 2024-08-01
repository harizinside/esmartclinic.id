import type { Document } from 'mongoose'
import { Schema } from 'mongoose'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IMenu extends Document {
  name: string
  icon: string
  status: boolean
  order: number
  children: {
    name: string
    icon: string
    status: boolean
    order: number
    createdAt: Date
    updatedAt: Date
  }[]
  updatedAt: Date
}

const MenuSchema = new Schema<IMenu>(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    status: { type: Boolean, required: true, default: true },
    order: { type: Number, required: true },
    children: [{
      name: { type: String, required: true },
      icon: { type: String, required: true },
      status: { type: Boolean, required: true, default: true },
      order: { type: Number, required: true },
      createdAt: Date,
      updatedAt: Date,
    }],
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const MenuModel = defineMongooseModel<IMenu>({
  name: 'menus',
  schema: MenuSchema,
})

export { IMenu, MenuSchema }
