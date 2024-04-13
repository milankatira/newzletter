'use server'
import nodemailer, { Transporter } from 'nodemailer'

export async function sendMail(subject: string, toEmail: string, otpText: string) {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL || '',
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PW || '',
      },
    })

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: 'milan@instaservice.com',
      subject: subject,
      text: otpText,
      html: `<p>This is your email content</p><img src="http://localhost:3000/trackingpixel.png?emailId=milan@instaservice.com" alt="" style="display:none">`,
      dsn: {
        id: 'some random message specific id',
        return: 'headers',
        notify: 'success',
        recipient: 'sender@example.com',
      },
    }

    await transporter.sendMail(mailOptions)
    console.log('Email Sent')
    // return true;
  } catch (error) {
    console.error('Error sending email:', error)
    throw error // Rethrow the error for the caller to handle
  }
}
