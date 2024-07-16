import { z } from 'zod';

export const UpdateDomainSchema = z.object({
  id: z.string({ required_error: 'Enviar o campo id', invalid_type_error: 'Campo id precisa ser string !' }).trim(),

  domain: z
    .string({
      required_error: 'Enviar o campo domain',
      invalid_type_error: 'Dominio precisa ser string',
    })
    .trim()
    .min(1, { message: 'Dominio é obrigatório' }),

  userId: z
    .string({
      required_error: 'Enviar o campo userId',
      invalid_type_error: 'UserId precisa ser string',
    })
    .trim()
    .min(1, { message: 'UserId é obrigatório' }),
});
