import { Insets, ViewProps } from 'react-native';

export type PressableProps = ViewProps & {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  disabled?: null | boolean;
  hitSlop?: Insets;
};
