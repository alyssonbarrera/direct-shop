import { SignInForm } from '@/modules/auth/forms/sign-in-form';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export function SignInScreen() {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="flex-1 items-center justify-center">
      <View className="w-full max-w-sm">
        <SignInForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
