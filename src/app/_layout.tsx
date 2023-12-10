import { Slot } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';

import { AuthGate } from '@/providers';

NativeWindStyleSheet.setOutput({
  default: 'native'
});

const Layout = () => (
  <AuthGate>
    <Slot />
  </AuthGate>
);

export default Layout;
