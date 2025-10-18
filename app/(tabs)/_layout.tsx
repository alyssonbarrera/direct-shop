import { Tabs } from 'expo-router';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Home, Settings, User } from 'lucide-react-native';
import { Platform } from 'react-native';
import { Icon as CustomIcon } from '@/core/components/ui/icon';

const isAndroid = Platform.OS === 'android';

export default function TabsLayout() {
  if (isAndroid) {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarIcon: () => <CustomIcon as={Home} className="text-dark dark:text-white" />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: () => <CustomIcon as={User} className="text-dark dark:text-white" />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Configurações',
            tabBarIcon: () => <CustomIcon as={Settings} className="text-dark dark:text-white" />,
          }}
        />
      </Tabs>
    );
  }

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Início</Label>
        <Icon sf="house.fill" drawable="ic_menu_view" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Label>Perfil</Label>
        <Icon sf="person.fill" drawable="ic_menu_view" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Configurações</Label>
        <Icon sf="gear.circle.fill" drawable="ic_menu_manage" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
