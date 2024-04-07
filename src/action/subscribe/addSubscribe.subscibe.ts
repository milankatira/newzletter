'use server'
import Subscriber, { SubscriberDocument } from '@/models/subscriber'
import { connectToDB } from '@/utils/db'
import { Schema } from 'mongoose'

interface AddSubscriberInput {
  email: string
  user_id: Schema.Types.ObjectId
}

export const addSubscriber = async ({
  email,
  user_id,
}: AddSubscriberInput): Promise<{ message: string }> => {
  try {
    await connectToDB()
    const subscriber: SubscriberDocument | null = await Subscriber.findOne({ email })

    if (subscriber) {
      return { message: 'Subscriber already exists!' }
    } else {
      await Subscriber.create({ email, user_id })
      return { message: 'Subscriber added successfully!' }
    }
  } catch (error) {
    console.log(error,"error ")
    throw new Error('Failed to add subscriber')
  }
}
