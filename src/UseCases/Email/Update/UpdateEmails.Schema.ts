import { z } from 'zod';

import { HandleIsValidEmail } from '@shared/features/handleIsValidEmail/handleIsValidEmail';

export const UpdateEmailsSchema = z.object({
  id: z.string({ required_error: 'Enviar o campo id', invalid_type_error: 'Campo id precisa ser string !' }).trim(),

  userId: z
    .string({
      required_error: 'Enviar o campo userId',
      invalid_type_error: 'userId precisa ser string',
    })
    .trim()
    .min(1, { message: 'userId é obrigatório' }),

  email: z
    .string({
      required_error: 'Enviar campo email',
      invalid_type_error: 'email precisa ser string !',
    })
    .trim()
    .superRefine((val, ctx) => {
      if (!HandleIsValidEmail(val)) ctx.addIssue({ code: 'custom', message: 'formato do email invalido !' });
    }),
});
