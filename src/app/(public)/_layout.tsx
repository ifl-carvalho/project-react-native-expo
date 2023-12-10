import { Stack } from 'expo-router';

import { Header } from '@/components/header';

const Layout = () => (
  <Stack>
    <Stack.Screen name="sign-in" options={{ header: Header }} />
  </Stack>
);

export default Layout;
