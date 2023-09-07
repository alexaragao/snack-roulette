import React, { FC } from 'react';
import { Animated, Dimensions, SafeAreaView, View } from 'react-native';
import { Text } from '~/components/Text';
import { Snack } from '~/domain/entities/Snack';
import { SnackRoulette } from './components/SnackRoulette';
import { styles } from './styles';

const { height, width } = Dimensions.get('screen');

const ROULETTE_SIZE = 2 * height;

export type RouletteUIProps = {
  showSortedSnack: boolean;
  sortedSnack: Snack;
  rouletteRotation: Animated.Value;
  snacks: Snack[];
};

export const RouletteUI: FC<RouletteUIProps> = ({
  showSortedSnack,
  rouletteRotation,
  sortedSnack,
  snacks,
}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rouletteContainer}>
        <Animated.View
          style={{
            width: ROULETTE_SIZE,
            height: ROULETTE_SIZE,
            transform: [
              {
                rotate: rouletteRotation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        >
          <SnackRoulette
            size={ROULETTE_SIZE}
            itemSize={width * 0.6}
            snacks={snacks}
          />
        </Animated.View>
      </View>
      <View style={[styles.snackTitle, !showSortedSnack && styles.invisible]}>
        <Text style={styles.title}>{sortedSnack.name}</Text>
      </View>
    </SafeAreaView>
  );
};
