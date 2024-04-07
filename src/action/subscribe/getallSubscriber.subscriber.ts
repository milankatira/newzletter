'use server'

import Subscriber, { SubscriberDocument } from '@/models/subscriber'
import { connectToDB } from '@/utils/db'

interface GetAllSubscribersInput {
    page?: number
    limit?: number
}

export const getAllSubscribers = async ({
    page = 1,
    limit = 10
}: GetAllSubscribersInput = {}): Promise<{ data: SubscriberDocument[], totalCount: number }> => {
    try {
        await connectToDB()

        const data: SubscriberDocument[] = await Subscriber.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .exec()


        const totalCount: number = await Subscriber.countDocuments()
        console.log(data, "data")
        return { data, totalCount }
    } catch (error) {
        console.error(error)
        throw new Error('Failed to get subscribers')
    }
}
