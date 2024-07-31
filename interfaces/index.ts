interface IResult {
  status: boolean | number
}

export interface IAuth extends IResult {
  response: string
  user: {
    name: string
    password: string
    path: string
    _id: string
  }
}

export interface IError {
  message: string
  stack: string
  statusCode: number
  statusMessage: string
  url: string
  data?: {
    issues?: {
      code: string
      exact: boolean
      inclusive: boolean
      message: string
      minimum: string
      path: string[]
      type: string
    }[]
    name?: string
    message?: string
  }[]
}
