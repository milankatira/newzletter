'use server'

import Email from '@/models/email'
import { connectToDB } from '@/utils/db'

export const saveEmail = async ({
  title,
  content,
  user_id,
}: {
  title: string
  content: string
  user_id: string
}) => {
  try {
    await connectToDB()
    const email = await Email.findOne({
      title,
      user_id,
    })

    if (email) {
      await Email.findByIdAndUpdate(email._id, {
        content,
      })
      return { message: 'Email updated successfully!' }
    } else {
      await Email.create({
        title,
        content,
        user_id,
      })
      return { message: 'Email saved successfully!' }
    }
  } catch (error) {
    console.log(error)
  }
}
