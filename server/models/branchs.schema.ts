import type { Document, Types } from 'mongoose'
import { Schema, model } from 'mongoose'
import ComanyModel from './companys.schema'
import VillageModel from './_villages.schema'

interface BranchProps {
  path: string | null// Logo
  companyId: Types.ObjectId
  name: string
  email: string
  phone: string
  address: {
    address: string
    rt: number
    rw: number
    villageId: Types.ObjectId
    coordinate: string[]
  }
  prefix: {
    registered: string
    invoiced: string
  }
  status: boolean
  plugins: {
    satusehat: {
      id: string
      key: string
      secret: string
    }
  }
  updatedAt: Date
}

const BranchSchema = new Schema(
  {
    path: { type: String },
    companyId: { type: 'ObjectId', ref: ComanyModel, required: true },
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    address: {
      address: { type: String, required: true },
      rt: { type: Number },
      rw: { type: Number },
      villageId: { type: 'ObjectId', ref: VillageModel, required: true },
      coordinate: [{ type: String }],
    },
    prefix: {
      registered: { type: String, required: true },
      invoiced: { type: String, required: true },
    },
    status: { type: Boolean, required: true },
    plugins: {
      satusehat: {
        id: { type: String },
        key: { type: String },
        secret: { type: String },
      },
    },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

interface BranchDocument extends Document, BranchProps { }
const BranchModel = model<BranchDocument>('branchs', BranchSchema)

export default BranchModel
export { BranchDocument, BranchSchema }
