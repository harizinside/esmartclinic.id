import { z } from 'zod'
import { Types } from 'mongoose'
import { compareSync } from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '@/server/models/users.schema'

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
    const result = await UserModel.aggregate([
      {
        '$match': {
          '_id': new Types.ObjectId(userId)
        }
      }, {
        '$lookup': {
          'from': 'previlages', 
          'localField': '_id', 
          'foreignField': 'users.userId', 
          'as': 'privileges'
        }
      }, {
        '$unwind': '$privileges'
      }, {
        '$lookup': {
          'from': 'menus', 
          'localField': 'privileges.menu.menuId', 
          'foreignField': '_id', 
          'as': 'menus'
        }
      }, {
        '$unwind': '$menus'
      }, {
        '$project': {
          '_id': 0, 
          'name': '$menus.name', 
          'icon': '$menus.icon', 
          'status': '$menus.status', 
          'order': '$menus.order', 
          'children': {
            '$map': {
              'input': '$menus.children', 
              'as': 'child', 
              'in': {
                'name': '$$child.name', 
                'icon': '$$child.icon', 
                'status': '$$child.status', 
                'order': '$$child.order', 
                'createdAt': '$$child.createdAt', 
                'updatedAt': '$$child.updatedAt', 
                'privileges': {
                  '$filter': {
                    'input': '$privileges.menu', 
                    'as': 'priv', 
                    'cond': {
                      '$eq': [
                        '$$priv.menuId', '$$child._id'
                      ]
                    }
                  }
                }
              }
            }
          }, 
          'updatedAt': '$menus.updatedAt', 
          'privileges': {
            '$filter': {
              'input': '$privileges.menu', 
              'as': 'priv', 
              'cond': {
                '$eq': [
                  '$$priv.menuId', '$menus._id'
                ]
              }
            }
          }
        }
      }, {
        '$match': {
          'privileges.read': true
        }
      }, {
        '$unwind': {
          'path': '$privileges', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$project': {
          'name': 1, 
          'icon': 1, 
          'status': 1, 
          'order': 1, 
          'children': {
            '$filter': {
              'input': '$children', 
              'as': 'child', 
              'cond': {
                '$anyElementTrue': [
                  '$$child.privileges.read'
                ]
              }
            }
          }, 
          'updatedAt': 1, 
          'privileges': 1
        }
      }, {
        '$project': {
          'name': '$name', 
          'icon': '$icon', 
          'status': '$status', 
          'order': '$order', 
          'privilage': {
            'create': '$privileges.create', 
            'read': '$privileges.read', 
            'update': '$privileges.update', 
            'delete': '$privileges.delete', 
            'import': '$privileges.import', 
            'export': '$privileges.export'
          }, 
          'children': {
            '$map': {
              'input': '$children', 
              'as': 'ano', 
              'in': {
                'name': '$$ano.name', 
                'icon': '$$ano.icon', 
                'status': '$$ano.status', 
                'order': '$$ano.order', 
                'privilage': {
                  '$first': {
                    '$map': {
                      'input': '$$ano.privileges', 
                      'as': 'xpriv', 
                      'in': {
                        'create': '$$xpriv.create', 
                        'read': '$$xpriv.read', 
                        'update': '$$xpriv.update', 
                        'delete': '$$xpriv.delete', 
                        'import': '$$xpriv.import', 
                        'export': '$$xpriv.export'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, {
        '$sort': {
          'order': 1
        }
      }
    ]);

    return result
  }
  catch (error) {
    return error
  }
}
