import mongoose, { ObjectId } from 'mongoose'

export interface User {
  password: string
  username: string
  email: string
  _id: ObjectId
}

const UserSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

export default mongoose.models.User || mongoose.model<User>('User', UserSchema)
// export const adapter = new MongodbAdapter(
//   mongoose.connection.collection('sessions'),
//   mongoose.connection.collection('users')
// );
