import { getConfig } from '@/config'
import jwt from 'jsonwebtoken'
export const createJWTToken = (userData: any): string => {
  try {
    const token = jwt.sign(
      {
        id: userData._id,
        email: userData.email,
      },
      getConfig('jwt_key') as unknown as string,
      { expiresIn: '30d' },
    )
    return token
  } catch (error) {
    console.log(userData, 'userData')
    throw new Error('ERROR IN CREATING TOKEN')
  }
}


export const verifyJWTToken = async (token: string) => {
  try {
    console.log(token, "token", getConfig('jwt_key'))
    //@ts-ignore
    const decoded = await jwt.verify(token, getConfig('jwt_key'));

    console.log(decoded,"decoded")
    return decoded;
  } catch (error) {
    console.log(error,"error")
    throw new Error('Invalid or expired token');
  }
};