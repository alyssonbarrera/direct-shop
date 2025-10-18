import { Button } from '@/core/components/ui/button';
import { Text } from '@/core/components/ui/text';
import { useAuthStore } from '@/core/stores/auth-store';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const { logout } = useAuthStore();

  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Button onPress={logout}>
        <Text>Sair</Text>
      </Button>
    </SafeAreaView>
  );
}
