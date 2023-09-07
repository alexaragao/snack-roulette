import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { AppStackParams } from '~/navigation/AppStack/types';
import { RouletteUI } from './ui';

export type RouletteScreenProps = NativeStackScreenProps<
  AppStackParams,
  'Roulette'
>;

export const RouletteScreen: FC<RouletteScreenProps> = ({ route }) => {
  const { snacks } = route.params;

  const [showSortedSnack, setShowSortedSnack] = useState(false);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const sortedSnackIndex = useMemo(
    () => (Math.random() * snacks.length) << 0,
    [snacks]
  );

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 4 - sortedSnackIndex / snacks.length,
      easing: Easing.out(Easing.cubic),
      duration: 5000,
      useNativeDriver: false,
    }).start(() => setShowSortedSnack(true));
  }, []);

  return (
    <RouletteUI
      showSortedSnack={showSortedSnack}
      sortedSnack={snacks[sortedSnackIndex]}
      rouletteRotation={rotateAnim}
      snacks={snacks}
    />
  );
};
