import { PressableProps } from '../Pressable';

export type ButtonProps = PressableProps & {
  title?: string;
  disabled?: boolean;
};
