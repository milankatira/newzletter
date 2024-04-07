import mongoose, { Schema, Document } from 'mongoose'

export interface SubscriberDocument extends Document {
  user_id: Schema.Types.ObjectId
  email: string
  subscribedAt: Date
}

const subscriberSchema: Schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
})

const Subscriber = mongoose.models.Subscriber || mongoose.model<SubscriberDocument>('Subscriber', subscriberSchema)

export default Subscriber
