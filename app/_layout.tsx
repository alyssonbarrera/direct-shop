import '@/global.css';

import { NAV_THEME } from '@/core/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useAuthStore } from '@/core/stores/auth-store';
import { ActivityIndicator, View } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const { isLoggedIn, _hasHydrated } = useAuthStore();

  if (!_hasHydrated) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider>
        <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
          <Stack>
            <Stack.Protected guard={isLoggedIn}>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Protected guard={!isLoggedIn}>
              <Stack.Screen name="sign-in" options={{ headerShown: false, animation: 'fade' }} />
              <Stack.Screen name="sign-up" options={{ headerShown: false, animation: 'fade' }} />
              <Stack.Screen
                name="forgot-password"
                options={{ headerShown: false, animation: 'fade' }}
              />
            </Stack.Protected>
          </Stack>
          <PortalHost />
        </ThemeProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}
