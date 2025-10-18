import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
