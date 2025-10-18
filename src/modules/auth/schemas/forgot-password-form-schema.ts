import { z } from 'zod';

export const forgotPasswordFormSchema = z.object({
  email: z.email('Email inválido'),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
