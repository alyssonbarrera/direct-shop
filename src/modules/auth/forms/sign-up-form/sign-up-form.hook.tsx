import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema, type SignUpFormSchema } from '../../schemas/sign-up-form-schema';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/core/stores/auth-store';

export function useSignUpForm() {
  const router = useRouter();
  const { login } = useAuthStore();

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onNameSubmitEditing() {
    form.setFocus('email');
  }

  function onEmailSubmitEditing() {
    form.setFocus('password');
  }

  function onSubmit(data: SignUpFormSchema) {
    console.log('Submit sign-up form', data);
    login({
      token: '1234',
      user: {
        id: '1',
        email: data.email,
        name: data.name,
        avatarUrl: 'https://i.pravatar.cc/150?u=' + data.name,
      },
    });
  }

  function redirectToSignIn() {
    router.navigate('/sign-in');
  }

  return {
    form,
    onSubmit,
    onNameSubmitEditing,
    onEmailSubmitEditing,
    redirectToSignIn,
  };
}
