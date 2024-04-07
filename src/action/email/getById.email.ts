'use server'

import Email from '@/models/email'
import { connectToDB } from '@/utils/db'

export const getEmailById = async (id: string) => {
  try {
    await connectToDB()
    const email = await Email.findById(id)

    return email
  } catch (error) {
    console.log(error)
  }
}
