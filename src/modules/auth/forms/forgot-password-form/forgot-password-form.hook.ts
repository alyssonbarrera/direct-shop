import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgotPasswordFormSchema,
  forgotPasswordFormSchema,
} from '../../schemas/forgot-password-form-schema';

export function useForgotPasswordForm() {
  const form = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: ForgotPasswordFormSchema) {
    console.log('Submit sign-in form', data);
  }

  return {
    form,
    onSubmit,
  };
}
