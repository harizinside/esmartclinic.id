import { z } from 'zod'

interface ILogin {
  status: boolean
  message: string
  result?: IResult
  errors?: IError[]
}

interface IResult {
  company: string
  id: number
  role: string
  roleId: number
  sessions: ISessions[]
  token: string
  validPassword: boolean
}

interface ISessions {
  id: string
  site: string | null
  ip: string
  ua: string | null
  browser: {
    name: string
    version: string
    major: string
  }
  cpu: {
    architecture: string | null
  }
  device: {
    kind: string
    model: string
    vendor: string
  }
  engine: {
    name: string
    version: string
  }
  os: {
    name: string
    version: string
  }
}

interface IError {
  received?: string
  validation?: string
  code: string
  minimum?: string
  type?: string
  inclusive?: boolean
  exact?: boolean
  options?: string[]
  message: string
  path: string[]
  field: string
  value?: string
};

export default defineEventHandler(async (event) => {
  const XHEADER = getRequestHeaders(event)
  const IHEADER = {
    'Authorization': `${process.env.API_KEY}`,
    'Accept': 'application/json',
    'Accept-Language': 'id',
    'Content-Type': 'application/json',
    'Origin': 'esmartclinic.id',
    'User-Agent': XHEADER['User-Agent']!,
  }

  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    remember: z.boolean(),
  })

  const body = await readValidatedBody(event, userSchema.parse)

  const response: ILogin = await $fetch(`${process.env.API_URL}/legacy/auth/login`, {
    method: 'POST',
    headers: IHEADER,
    body: JSON.stringify({
      username: body.email,
      password: body.password,
    }),
  })

  if (response.status) {
    return response.result
  }

  return response
})
