import { Button } from '@/core/components/ui/button';
import { Text } from '@/core/components/ui/text';
import { useAuthStore } from '@/core/stores/auth-store';
import { ScrollView } from 'react-native';

export default function SettingsScreen() {
  const { logout } = useAuthStore();

  return (
    <ScrollView
      className="mt-safe bg-background px-6"
      contentContainerClassName="pb-8"
      showsVerticalScrollIndicator={false}>
      <Text className="text-center text-xl font-bold">Settings Screen</Text>
      <Button onPress={logout} className="mt-4">
        <Text>Sair</Text>
      </Button>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
      <Text className="mt-4 text-base font-medium leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non ex saepe veritatis.
        Eligendi repellendus quis odit officiis dolore et veniam quas odio beatae, exercitationem
        dignissimos sequi atque aliquid reiciendis.
      </Text>
    </ScrollView>
  );
}
