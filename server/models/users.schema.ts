import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { TitleModel } from './_titles.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IUsers extends Document {
  medicalRecord: string | null
  registerRecord: string
  name: string
  email: {
    value: string
    date: Date | null
  }
  phone: {
    value: string
    date: Date | null
  }
  password: string | null
  path: string | null // Avatar
  identified: {
    category: 'KTP' | 'VISA' | 'PASSPORT' | null
    value: string
    path: string
  }
  titleId: Types.ObjectId
  birth: {
    location: string
    date: Date | null
  }
  sex: boolean | null
  blood: {
    rhesus: boolean
    type: 'A' | 'B' | 'AB' | 'BA' | '0'
  }
  address: {
    address: string
    rt: number
    rw: number
    villageId: Types.ObjectId
    coordinate: string[]
  }
  religionId: Types.ObjectId | null
  maritalStatusId: Types.ObjectId | null
  workingStatusId: Types.ObjectId | null
  citizenshipStatus: 'WNI' | 'WNA'
  educationId: Types.ObjectId | null
  ethnicGroupId: Types.ObjectId | null
  typesId: Types.ObjectId | null
  marketingId: Types.ObjectId | null
  branchId: Types.ObjectId | null
  interface: boolean | null // 1 Light | 0 Dark
  language: 'en' | 'id' | null
  createdId: number | null
  updatedId: number | null
  updatedReson: string | null
  deletedId: number | null
  deletedAt: Date | null
  deletedReason: string | null
}

const UserSchema = new Schema<IUsers>(
  {
    medicalRecord: { type: String },
    registerRecord: { type: String, required: true },
    titleId: { type: 'ObjectId', ref: TitleModel, required: true },
    name: { type: String, minlength: 5, maxlength: 225, required: true },
    email: {
      value: { type: String },
      date: { type: Date },
    },
    phone: {
      value: { type: String },
      date: { type: Date },
    },
    password: { type: String },
    path: { type: String },
    identified: {
      category: { type: String, enum: ['KTP', 'VISA', 'PASSPORT'] },
      value: { type: String },
      path: { type: String },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

export const UserModel = defineMongooseModel<IUsers>({
  name: 'users',
  schema: UserSchema,
})

export { IUsers, UserSchema }
