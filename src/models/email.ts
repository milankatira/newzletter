import mongoose from 'mongoose'

const { Schema } = mongoose

const emailSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { timestamps: true },
)

const Email = mongoose.models.Emails || mongoose.model('Emails', emailSchema)
export default Email
