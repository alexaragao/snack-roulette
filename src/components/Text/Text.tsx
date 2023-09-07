import React, { FC } from 'react';
import { Text as RNText } from 'react-native';
import { styles } from './styles';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
  variant = 'contrast-high',
  size = 'body',
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.text,
        styles[`text-variant-${variant}`],
        styles[`text-size-${size}`],
        style,
      ]}
      {...props}
    />
  );
};
