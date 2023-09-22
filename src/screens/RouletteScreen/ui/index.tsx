import React, { FC } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  AnimatedStyle,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { Text } from '~/components/Text';
import { Snack } from '~/domain/entities/Snack';
import { SnackRoulette } from './components/SnackRoulette';
import { styles } from './styles';

const { height, width } = Dimensions.get('screen');

const ROULETTE_SIZE = 2 * height;
const ANGLE = Math.atan(width / ROULETTE_SIZE);
const VELOCITY_THRESHOLD = 25;

export type RouletteUIProps = {
  showSortedSnack: boolean;
  sortedSnack: Snack;
  rouletteRotation: AnimatedStyle;
  snacks: Snack[];
};

export const RouletteUI: FC<RouletteUIProps> = ({
  showSortedSnack,
  rouletteRotation,
  sortedSnack,
  snacks,
}) => {
  const rotation = useSharedValue(0);
  const spinVelocity = useSharedValue(0);

  const shouldSpring = useDerivedValue(
    () => Math.abs(spinVelocity.value) < VELOCITY_THRESHOLD
  );

  const pan = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startX = rotation.value;
      context.velocity = event.velocityX;
    },
    onActive: (event, context) => {
      spinVelocity.value = event.velocityX * 0.01;
      rotation.value = context.startX + event.translationX;
    },

    onFinish: (event, context) => {
      if (shouldSpring.value) {
        rotation.value = withSpring(Number(context.startX), {
          velocity: event.velocityX,
          mass: 2,
          stiffness: 120,
          damping: 13,
          restDisplacementThreshold: 0.05,
          restSpeedThreshold: 30,
        });
      } else {
        rotation.value = withDecay({
          velocity: event.velocityX,
          deceleration: 0.996,
        });
      }
    },
  });

  const rotateStyle = useAnimatedStyle(() => {
    const input = shouldSpring.value
      ? [-width / 2, width / 2]
      : [0, 2 * Math.PI];
    const output = shouldSpring.value ? [-ANGLE, ANGLE] : [0, 360];

    const rotate = interpolate(rotation.value, input, output);
    return {
      transform: [
        {
          rotate: shouldSpring.value ? `${rotate}rad` : `${rotate}deg`,
        },
      ],
    };
  }, [rotation, shouldSpring]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.rouletteContainer}>
        <PanGestureHandler onGestureEvent={pan}>
          <Animated.View
            style={[
              {
                width: ROULETTE_SIZE,
                height: ROULETTE_SIZE,
              },
              rotateStyle,
            ]}
          >
            <SnackRoulette
              size={ROULETTE_SIZE}
              itemSize={width * 0.6}
              snacks={snacks}
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
      <View style={[styles.snackTitle, !showSortedSnack && styles.invisible]}>
        <Text style={styles.title}>{sortedSnack.name}</Text>
      </View>
    </SafeAreaView>
  );
};
