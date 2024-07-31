import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  if (event._path?.startsWith('/api/v1/oauth')) {
    return
  }
  else if (event._path?.startsWith('/api/v1')) {
    const TOKEN = getHeader(event, 'Authorization')

    if (!TOKEN) return createError({
      status: 401,
      statusMessage: 'Unauthorized',
      message: 'Authorization header missing',
    })

    const JWT = jwt.verify(TOKEN, process.env.KEY!)
    setHeader(event, 'X-Real-User', JSON.stringify(JWT))
  }
})
