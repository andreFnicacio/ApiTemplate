import { z } from 'zod';

export const SchemaCreateDomain = z.object({
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
      invalid_type_error: 'userId precisa ser string',
    })
    .trim()
    .min(1, { message: 'userId é obrigatório' }),
});
