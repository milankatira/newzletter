import { getConfig } from '@/config'
import mongoose from 'mongoose'

const connection: any = {}

export const connectToDB = async () => {
  try {
    console.log(getConfig('mongoUrl'), 'etConfig')
    if (connection.isConnected) return
    const db = await mongoose.connect(getConfig('mongoUrl') as unknown as string)
    connection.isConnected = db.connections[0].readyState
  } catch (error: any) {
    console.log(error, 'MongoDb Error')
    throw new Error(error)
  }
}
