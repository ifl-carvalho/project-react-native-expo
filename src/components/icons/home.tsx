import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  focused: boolean;
  color: string;
  size: number;
};

export const Home = (props: Props) => {
  return <MaterialIcons {...props} name="home" />;
};
