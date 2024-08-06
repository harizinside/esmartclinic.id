import type { Document } from 'mongoose'
import { Schema, model } from 'mongoose'

interface MenuProps {
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

const MenuSchema = new Schema(
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

interface MenuDocument extends Document, MenuProps { }
const MenuModel = model<MenuDocument>('menus', MenuSchema)

export default MenuModel
export { MenuDocument, MenuSchema }
