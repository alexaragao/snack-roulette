import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { PressableProps } from './types';

export const PRESSABLE_OPACITY = 0.85;

export const Pressable: FC<PressableProps> = ({ ...props }) => {
  return <TouchableOpacity activeOpacity={PRESSABLE_OPACITY} {...props} />;
};
