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
import { useForgotPasswordForm } from './forgot-password-form.hook';
import { Controller } from 'react-hook-form';
import { FieldError } from '@/core/components/field-error';

export function ForgotPasswordForm() {
  const { form, onSubmit } = useForgotPasswordForm();

  return (
    <View className="gap-6">
      <Card className="border-border/0 shadow-none sm:border-border sm:shadow-sm sm:shadow-black/5">
        <CardHeader>
          <CardTitle className="text-center text-xl sm:text-left">Esqueceu sua senha?</CardTitle>
          <CardDescription className="text-center sm:text-left">
            Insira seu email para resetar sua senha
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-6">
          <View className="gap-6">
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
            <Button className="w-full" onPress={form.handleSubmit(onSubmit)}>
              <Text>Resetar senha</Text>
            </Button>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}
