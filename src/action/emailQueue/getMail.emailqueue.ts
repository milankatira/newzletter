import EmailQueue from '@/models/emailQueue'
import { connectToDB } from '@/utils/db'

export const calculateOpeningRate = async (): Promise<number> => {
    try {
        await connectToDB()

        const openedEmailsCount: number = await EmailQueue.countDocuments({ open: true })

        const totalEmailsCount: number = await EmailQueue.countDocuments()

        const openingRate: number = (openedEmailsCount / totalEmailsCount) * 100

        return openingRate
    } catch (error) {
        console.log(error, 'error')
        throw new Error('Failed to calculate opening rate')
    }
}

export const calculateSendingRate = async (): Promise<number> => {
    try {
        await connectToDB()

        const sentEmailsCount: number = await EmailQueue.countDocuments({ send: true })

        const totalEmailsCount: number = await EmailQueue.countDocuments()

        const sendingRate: number = (sentEmailsCount / totalEmailsCount) * 100

        return sendingRate
    } catch (error) {
        console.log(error, 'error')
        throw new Error('Failed to calculate sending rate')
    }
}
