import { View } from 'react-native';
import { SignUpForm } from '../forms/sign-up-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export function SignUpScreen() {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="flex-1 items-center justify-center">
      <View className="w-full max-w-sm">
        <SignUpForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
