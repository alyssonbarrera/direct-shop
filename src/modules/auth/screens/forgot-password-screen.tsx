import { ScrollView, View } from 'react-native';
import { ForgotPasswordForm } from '../forms/forgot-password-form';

export function ForgotPasswordScreen() {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="flex-1 items-center justify-center p-4 py-8"
      keyboardDismissMode="interactive">
      <View className="w-full max-w-sm">
        <ForgotPasswordForm />
      </View>
    </ScrollView>
  );
}
