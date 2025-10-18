import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInFormSchema, type SignInFormSchema } from '../../schemas/sign-in-form-schema';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/core/stores/auth-store';

export function useSignInForm() {
  const router = useRouter();
  const { login } = useAuthStore();

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onEmailSubmitEditing() {
    form.setFocus('password');
  }

  function onSubmit(data: SignInFormSchema) {
    console.log('Submit sign-in form', data);
    login({
      token: '1234',
      user: {
        id: '1',
        email: data.email,
        name: 'John Doe',
        avatarUrl: 'https://i.pravatar.cc/150?u=JohnDoe',
      },
    });
  }

  function redirectToForgotPassword() {
    router.navigate('/forgot-password');
  }

  return {
    form,
    onSubmit,
    onEmailSubmitEditing,
    redirectToForgotPassword,
  };
}
