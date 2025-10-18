import { z } from 'zod';

export const signUpFormSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
