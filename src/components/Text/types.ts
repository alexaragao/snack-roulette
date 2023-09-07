import { TextProps as RNTextProps } from 'react-native';

export type TextVariant =
  | 'primary'
  | 'contrast-high'
  | 'contrast-medium'
  | 'contrast-low';

export type TextSize = 'body' | 'title';

export type TextProps = RNTextProps & {
  variant?: TextVariant;
  size?: 'body' | 'title';
};
