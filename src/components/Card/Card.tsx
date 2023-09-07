import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({ style, ...props }) => {
  return <View style={[styles.card, style]} {...props} />;
};
