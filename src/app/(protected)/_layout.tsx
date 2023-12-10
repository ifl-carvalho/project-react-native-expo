import { Redirect, Tabs } from 'expo-router';

import { Home } from '@/components/icons';
import { useAuthStore } from '@/store/auth';

const Layout = () => {
  const { session } = useAuthStore();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: '', tabBarIcon: Home }} />
    </Tabs>
  );
};

export default Layout;
