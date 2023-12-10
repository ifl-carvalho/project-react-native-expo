import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

import { useAuthStore } from '@/store/auth';

const SignIn = () => {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const user = { username: 'user', password: 'password' };

  const submit = () => {
    login(user)
      .then(() => router.push('/'))
      .catch((e) => console.error(e));
  };

  return (
    <View>
      <Button title="Login" onPress={submit} />
    </View>
  );
};

export default SignIn;
