import { NextApiRequest, NextApiResponse } from 'next'

import { contactSchema } from '@/lib/validation'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = contactSchema.parse(req.body)

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: subject,
      html: `<p>Você possui uma nova mensagem de ${name}</p><br>
        <p><strong>E-mail: </strong> ${email}</p><br>
        <p><strong>Mensagem: </strong> ${message}</p><br>
      `,
    })
  } catch (error) {
    if (error instanceof z.ZodError)
      return res.status(400).json({ error: error.message })

    if (error instanceof Error)
      return res.status(500).json({ error: error.message || error.toString() })
  }

  return res.status(200).json({ error: null })
}

export default handler
