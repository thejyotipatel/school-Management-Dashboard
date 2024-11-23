import { auth } from '@clerk/nextjs/server'

// GET CURRENT USER
const { userId, sessionClaims } = await auth()
export const role = (sessionClaims?.metadata as { role?: string })
  ?.role as string

export const currentUserId = userId!
