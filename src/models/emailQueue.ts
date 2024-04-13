import mongoose, { ObjectId } from 'mongoose'
const { Schema } = mongoose
export interface EmailQueueDocument {
  email_id: ObjectId;
  to: string;
  from: string;
  status: 'pending' | 'sent' | 'failed';
  open: boolean;
  send: boolean;
}

const emailQueueSchema = new Schema(
  {
    email_id: {
      type: Schema.Types.ObjectId,
      ref: 'Emails',
    },
    to: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'sent', 'failed'],
      default: 'pending',
    },
    open: {
      type: Boolean,
      default: false,
    },
    send: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true },
)

const EmailQueue = mongoose?.models?.EmailQueues || mongoose.model('EmailQueues', emailQueueSchema)
export default EmailQueue