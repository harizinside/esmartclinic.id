import type { Document, Types } from 'mongoose'
import { Schema } from 'mongoose'
import { TitleModel } from './_titles.schema'
import { VillageModel } from './_villages.schema'
import { ReligionModel } from './_religions.schema'
import { MaritalModel } from './_maritals.schema'
import { WorkerModel } from './_workers.schema'
import { BranchModel } from './branchs.schema'
import { EducationModel } from './_educations.schema'
import { EthnicModel } from './_ethnics.schema'
import { InsuranceModel } from './insurance.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

interface IUsers extends Document {
  medicalRecord: string | null
  registerRecord: string
  titleId: Types.ObjectId
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
    type: 'HOME' | 'WORK'
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
  branchId: Types.ObjectId | null
  educationId: Types.ObjectId | null
  ethnicGroupId: Types.ObjectId | null
  insuranceId: Types.ObjectId | null
  interface: boolean | null // 1 Light | 0 Dark
  language: 'en' | 'id' | null
  createdId: Types.ObjectId | null
  updatedId: Types.ObjectId | null
  updatedReson: string | null
  deletedId: Types.ObjectId | null
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
    birth: {
      location: { type: String, required: true },
      date: { type: Date, required: true },
    },
    sex: { type: Boolean },
    blood: {
      rhesus: { type: Boolean },
      type: { type: String, enum: ['A', 'B', 'AB', 'BA', '0'] },
    },
    address: {
      type: { type: String, enum: ['HOME', 'WORK'] },
      address: { type: String },
      rt: { type: Number },
      rw: { type: Number },
      villageId: { type: 'ObjectId', ref: VillageModel, required: true },
      coordinate: [{ type: String }],
    },
    religionId: { type: 'ObjectId', ref: ReligionModel },
    maritalStatusId: { type: 'ObjectId', ref: MaritalModel },
    workingStatusId: { type: 'ObjectId', ref: WorkerModel },
    citizenshipStatus: { type: String, enum: ['WNI', 'WNA'] },
    branchId: { type: 'ObjectId', ref: BranchModel, required: true },
    educationId: { type: 'ObjectId', ref: EducationModel },
    ethnicGroupId: { type: 'ObjectId', ref: EthnicModel },
    insuranceId: { type: 'ObjectId', ref: InsuranceModel },
    interface: { type: Boolean, default: true },
    language: { type: String, enum: ['en', 'id'], default: 'id' },
    createdId: { type: 'ObjectId', ref: 'users' },
    updatedId: { type: 'ObjectId', ref: 'users' },
    updatedReson: { type: String },
    deletedId: { type: 'ObjectId', ref: 'users' },
    deletedAt: { type: Date },
    deletedReason: { type: String },
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
