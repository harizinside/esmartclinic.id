import { z } from 'zod'
import { Types } from 'mongoose'
import { compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '@/server/models/users.schema'
import PrevilageModel from '~/server/models/privilages.schema'

export default defineEventHandler(async (event) => {
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean(),
  })

  const body = await readValidatedBody(event, userSchema.parse)
  const user = await UserModel.findOne({ 'email.value': body.email }, 'name path password')
  if (!user) {
    return createError({
      status: 400,
      statusMessage: 'Email not found',
      message: 'Invalid user input',
      data: { field: 'email' },
    })
  }

  const auth = compareSync(body.password, user.password!)
  if (!auth) {
    return createError({
      status: 400,
      statusMessage: 'Password not match with email provide',
      message: 'Invalid user input',
      data: [{ field: 'password' }],
    })
  }

  const token = jwt.sign({ userId: user._id }, process.env.KEY!, {
    expiresIn: '1h',
  })

  if (body.remember) {
    await UserModel.updateOne({ _id: user._id }, { rememberToken: token })
  }

  const menu = await getMenusByUserId(user._id as string)

  return { status: true, token: token, user: user, menu: menu }
})

const getMenusByUserId = async (userId: string) => {
  try {
    const result = await PrevilageModel.aggregate([
      { $match: { 'users.userId': new Types.ObjectId(userId) } },
      { $unwind: '$menu' },
      {
        $lookup: {
          from: 'menus',
          localField: 'menu.menuId',
          foreignField: '_id',
          as: 'menuDetails',
        },
      },
      { $unwind: '$menuDetails' },
      {
        $unwind: {
          path: '$menuDetails.children',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'menus',
          localField: 'menuDetails.children._id',
          foreignField: '_id',
          as: 'childMenuDetails',
        },
      },
      {
        $unwind: {
          path: '$childMenuDetails',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          _id: 0,
          menuId: '$menu.menuId',
          name: '$menuDetails.name',
          icon: '$menuDetails.icon',
          status: '$menuDetails.status',
          order: '$menuDetails.order',
          updatedAt: '$menuDetails.updatedAt',
          permissions: {
            create: '$menu.create',
            read: '$menu.read',
            update: '$menu.update',
            delete: '$menu.delete',
            import: '$menu.import',
            export: '$menu.export',
          },
          children: {
            $cond: {
              if: { $gt: [{ $size: '$menu.children' }, 0] },
              then: {
                $map: {
                  input: '$menu.children',
                  as: 'child',
                  in: {
                    name: '$childMenuDetails.name',
                    icon: '$childMenuDetails.icon',
                    status: '$childMenuDetails.status',
                    order: '$childMenuDetails.order',
                    createdAt: '$childMenuDetails.createdAt',
                    updatedAt: '$childMenuDetails.updatedAt',
                    permissions: {
                      create: '$$child.create',
                      read: '$$child.read',
                      update: '$$child.update',
                      delete: '$$child.delete',
                      import: '$$child.import',
                      export: '$$child.export',
                    },
                  },
                },
              },
              else: [],
            },
          },
        },
      },
      {
        $group: {
          _id: null,
          menus: { $push: '$$ROOT' },
        },
      },
      {
        $project: {
          _id: 0,
          menus: 1,
        },
      },
    ])

    return result
  }
  catch (error) {
    return error
  }
}
