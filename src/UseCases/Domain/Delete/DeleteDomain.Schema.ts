import { z } from 'zod';

export const DeleteDomainSchema = z.object({
  id: z.string({ required_error: 'Enviar o campo id', invalid_type_error: 'Campo id precisa ser string !' }).trim(),

  userId: z
    .string({
      required_error: 'Enviar o campo userId',
      invalid_type_error: 'UserId precisa ser string',
    })
    .trim()
    .min(1, { message: 'UserId é obrigatório' }),
});
