import { Button } from '@/core/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/core/components/ui/card';
import { Input } from '@/core/components/ui/input';
import { Label } from '@/core/components/ui/label';
import { Text } from '@/core/components/ui/text';
import { View } from 'react-native';
import { useSignUpForm } from './sign-up-form.hook';
import { Controller } from 'react-hook-form';
import { FieldError } from '@/core/components/field-error';
import { Link } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export function SignUpForm() {
  const { form, onSubmit, onNameSubmitEditing, onEmailSubmitEditing, redirectToSignIn } =
    useSignUpForm();

  return (
    <KeyboardAwareScrollView bottomOffset={28}>
      <View className="gap-6">
        <Card className="border-border/0 shadow-none sm:border-border sm:shadow-sm sm:shadow-black/5">
          <CardHeader>
            <CardTitle className="text-center text-xl sm:text-left">Crie sua conta</CardTitle>
            <CardDescription className="text-center sm:text-left">
              Bem-vindo! Por favor, preencha os detalhes para começar.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-6">
            <View className="gap-6">
              <View className="gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Controller
                  control={form.control}
                  name="name"
                  render={({ field: { ref, name, onChange, onBlur, value } }) => (
                    <Input
                      ref={ref}
                      id={name}
                      placeholder="John Doe"
                      autoComplete="name"
                      autoCapitalize="words"
                      onSubmitEditing={onNameSubmitEditing}
                      returnKeyType="next"
                      submitBehavior="submit"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />

                {form.formState.errors.name?.message && (
                  <FieldError>{form.formState.errors.name?.message}</FieldError>
                )}
              </View>
              <View className="gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Controller
                  control={form.control}
                  name="email"
                  render={({ field: { ref, name, onChange, onBlur, value } }) => (
                    <Input
                      ref={ref}
                      id={name}
                      placeholder="johndoe@example.com"
                      keyboardType="email-address"
                      autoComplete="email"
                      autoCapitalize="none"
                      onSubmitEditing={onEmailSubmitEditing}
                      returnKeyType="next"
                      submitBehavior="submit"
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />

                {form.formState.errors.email?.message && (
                  <FieldError>{form.formState.errors.email?.message}</FieldError>
                )}
              </View>
              <View className="gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Controller
                  control={form.control}
                  name="password"
                  render={({ field: { ref, name, onChange, onBlur, value } }) => (
                    <Input
                      ref={ref}
                      id={name}
                      placeholder="••••••••"
                      returnKeyType="send"
                      secureTextEntry
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />

                {form.formState.errors.password?.message && (
                  <FieldError>{form.formState.errors.password?.message}</FieldError>
                )}
              </View>
              <Button className="w-full" onPress={form.handleSubmit(onSubmit)}>
                <Text>Continuar</Text>
              </Button>
            </View>
            <Text className="text-center text-sm">
              Já tem uma conta?{' '}
              <Link href={'/sign-in'}>
                <Text className="text-sm underline underline-offset-4">Fazer login</Text>
              </Link>
            </Text>
          </CardContent>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
}
