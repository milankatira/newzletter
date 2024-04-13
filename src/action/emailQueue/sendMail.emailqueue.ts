import EmailQueue, { EmailQueueDocument } from '@/models/emailQueue'
import { connectToDB } from '@/utils/db'

export const createEmailQueue = async (to: string, from: string): Promise<EmailQueueDocument> => {
    try {
        await connectToDB()
        const response: EmailQueueDocument = await EmailQueue.create({
            email_id: "66122fcc110a08d250e32b56",
            to,
            from,
        })
        return response
    } catch (error) {
        console.log(error, 'error')
        throw new Error('Failed to create email queue')
    }
}
