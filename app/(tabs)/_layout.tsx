import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pots"
        options={{
          title: 'View pots',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="coffee" color={color} />,
        }}
      />
      <Tabs.Screen
        name="addPot"
        options={{
          title: 'Add pot',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color="green" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
