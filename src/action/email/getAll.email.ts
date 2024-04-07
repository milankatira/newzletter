'use server'

import Email from '@/models/email'
import { connectToDB } from '@/utils/db'

export const getAllEmailsWithPagination = async ({
  page = 1,
  limit = 10,
}: {
  page?: number
  limit?: number
}) => {
  try {
    await connectToDB()
    const emailsPromise = Email.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();

  // Query to count total number of emails
  const totalEmailsPromise = Email.countDocuments().exec();

  // Execute both queries concurrently
  const [data, totalEmails] = await Promise.all([emailsPromise, totalEmailsPromise]);

  return {
    data,
    totalCount: totalEmails
  };
  } catch (error) {
    console.log(error)
  }
}
