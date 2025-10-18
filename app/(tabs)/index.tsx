import { Text } from '@/core/components/ui/text';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="px-6"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}>
        <Text className="text-center text-xl font-bold">Home Screen</Text>
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
    </SafeAreaView>
  );
}
