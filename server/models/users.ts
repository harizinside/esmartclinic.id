import { defineMongooseModel } from "#nuxt/mongoose";

interface IUsers {
  id: number;
  medicalRecord: string;
  registerRecord: string;
  name: string;
  email: {
    value: string;
    date: Date | null;
  };
  phone: {
    value: string;
    date: Date | null;
  };
  password: string;
  avatarPath: string | null;
  identified: {
    category: "KTP" | "VISA" | "PASSPORT";
    value: string;
    path: string;
  };
  title: string;
  birth: {
    location: string;
    date: Date | null;
  };
  sex: boolean | null;
  blood: {
    rhesus: boolean;
    type: "A" | "B" | "AB" | "BA" | "0";
  };
  address: string | null;
  area: {
    provice: string;
    city: string;
    subDistric: string;
    village: string;
    pos: string;
  };
  religion:
    | "ISLAM"
    | "KRISTEN KATOLIK"
    | "KRISTEN PROTESTAN"
    | "HINDU"
    | "BUDDHA"
    | "KHONGHUCU";
  maritalStatus: "BELUM KAWIN" | "KAWIN" | "CERAI HIDUP" | "CERAI MATI";
  workingStatus:
    | "PETANI"
    | "WIRASWASTA"
    | "PNS"
    | "POLISI"
    | "TNI"
    | "PELAJAR"
    | "MAHASISWA"
    | "MAHASISWI"
    | "SOPIR"
    | "PROFESSIONAL"
    | "KARYAWAN SWASTA"
    | "BURUH"
    | "IBU RUMAH TANGGA"
    | "LAIN - LAIN";
  citizenshipStatus: string | null;
  education_id: number | null;
  ethnic_group_id: number | null;
  types_id: number | null;
  marketing_id: number | null;
  branch_id: number | null;
  legacy_id: number | null;
  legacy_code: string | null;
  interface: string | null;
  language: string | null;

  overide_id: number | null;
  overide_at: Date | null;
  created_id: number;
  created_at: Date;
  updated_id: number;
  updated_at: Date;
  updated_rz: string | null;
  deleted_id: number | null;
  deleted_at: Date | null;
  deleted_rz: string | null;
}

export const UserSchema = defineMongooseModel({
  name: "Users",
  schema: {
    name: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
      unique: true,
    },
  },
});
