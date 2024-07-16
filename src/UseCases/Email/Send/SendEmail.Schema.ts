import { z } from 'zod';

export const SendEmailSchema = z.object({
  userId: z
    .string({
      required_error: 'Enviar o campo userId',
      invalid_type_error: 'userId precisa ser string',
    })
    .trim()
    .min(1, { message: 'userId é obrigatório' }),

  from: z
    .string({ required_error: 'Enviar o campo from', invalid_type_error: 'Campo from precisa ser string !' })
    .trim()
    .refine(
      (data) => {
        const [name, email] = data.split('<');
        const [_, domain] = email.split('@');
        const [localPart] = domain.split('>');
        return !!name && !!email && !!localPart && !!domain;
      },
      { message: 'Formato do campo from deve ser "Your Name <sender@domain.com>"' },
    )
    .optional(),

  to: z
    .string({ required_error: 'Enviar o campo to', invalid_type_error: 'Campo to precisa ser um email !' })
    .email('Campo to precisa ser um email válido'),

  subject: z.string({ required_error: 'Enviar o campo subject', invalid_type_error: 'Campo subject precisa ser string !' }).trim(),

  text: z.string({ required_error: 'Enviar o campo text', invalid_type_error: 'Campo text precisa ser string !' }).trim(),
});
