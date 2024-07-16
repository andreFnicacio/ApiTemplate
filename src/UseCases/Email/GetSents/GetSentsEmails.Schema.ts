import { z } from 'zod';

export const GetSentsEmailsSchema = z.object({
  userId: z
    .string({
      required_error: 'Enviar o campo userId',
      invalid_type_error: 'UserId precisa ser string',
    })
    .trim()
    .min(1, { message: 'UserId é obrigatório' }),

  page: z.coerce
    .number({
      required_error: 'page não encontrado !',
      invalid_type_error: 'Enviar page como number',
    })
    .superRefine((val, ctx) => {
      if (val <= 0) {
        ctx.addIssue({ code: 'custom', message: 'page não pode ser igual ou menor que 0' });
      }
      if (!Number.isInteger(val)) {
        ctx.addIssue({ code: 'custom', message: 'page não pode ser convertido em um número inteiro!' });
      }
    })
    .optional()
    .default(1),

  pageSize: z.coerce
    .number({
      required_error: 'pageSize não encontrado !',
      invalid_type_error: 'Enviar pageSize como number',
    })
    .superRefine((val, ctx) => {
      if (val <= 0) {
        ctx.addIssue({ code: 'custom', message: 'pageSize não pode ser igual ou menor que 0' });
      }
      if (!Number.isInteger(val)) {
        ctx.addIssue({ code: 'custom', message: 'pageSize não pode ser convertido em um número inteiro!' });
      }
    })
    .optional()
    .default(10),

  filter: z
    .string({
      invalid_type_error: 'Enviar filter como string',
    })
    .trim()
    .transform((val) => (val === '' ? undefined : val))
    .optional(),
});
