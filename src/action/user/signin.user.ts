'use server'
import { z } from 'zod'
import user, { User } from '@/models/user'
import bcrypt from 'bcrypt'
import { lucia } from '@/utils/auth'
import { cookies } from 'next/headers'
import { createJWTToken } from '@/utils/jwtUtils'
import { connectToDB } from '@/utils/db'

interface SignInResponse {
  message: string
  data: User
  token: string
}

export const signIn = async ({
  password,
  email,
}: {
  password: string
  email: string
}): Promise<SignInResponse> => {
  try {
    connectToDB()
    const SignInParamsSchema = z.object({
      password: z.string().min(6),
      email: z.string().email(),
    })

    SignInParamsSchema.parse({ password, email })

    const userData = await user.findOne({ email })

    if (!userData) {
      throw new Error('User not found')
    }

    const passwordValid = await bcrypt.compare(password, userData.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    console.log(userData, 'userData')
    // const session = await lucia.createSession(userData._id as unknown as string, {});
    // const sessionCookie = lucia.createSessionCookie(session.id);
    // cookies().set(
    //     sessionCookie.name,
    //     sessionCookie.value,
    //     sessionCookie.attributes
    // );
    return {
      message: 'Sign in successful!',
      data: userData,
      token: createJWTToken(userData),
    }
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}
