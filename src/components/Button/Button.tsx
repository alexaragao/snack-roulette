import React, { FC } from 'react';
import { View } from 'react-native';
import { Pressable } from '../Pressable';
import { Text } from '../Text';
import { styles } from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  title,
  style,
  disabled = false,
  ...props
}) => {
  return (
    <Pressable disabled={disabled} {...props}>
      <View style={[styles.button, disabled && styles.disabled, style]}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </Pressable>
  );
};
