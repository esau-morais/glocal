import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }).trim(),
  email: z
    .string()
    .min(1, { message: 'E-mail é obrigatório' })
    .email({ message: 'E-mail deve ser válido' })
    .trim(),
  subject: z.string().min(1, { message: 'Assunto é obrigatório' }).trim(),
  message: z.string().min(1, { message: 'Mensagem é obrigatória' }).trim(),
})

export type ContactValues = z.infer<typeof contactSchema>
