import React, { FC, useCallback } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { SvgUri } from 'react-native-svg';
import { Card } from '~/components/Card';
import { Text } from '~/components/Text';
import { Snack } from '~/domain/entities/Snack';
import { styles } from './styles';

export type SnackListItemProps = {
  snack: Snack;
  isSelected?: boolean;
  onPress?: () => void;
};

export const SnackListItem: FC<SnackListItemProps> = ({
  snack,
  isSelected = false,
  onPress,
}) => {
  const scale = useSharedValue(1);

  const handleOnPressIn = useCallback(() => {
    scale.value = withTiming(0.9, { duration: 200 });
  }, [scale]);

  const handleOnPressOut = useCallback(() => {
    scale.value = withSpring(1);
  }, [scale]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Animated.View
        style={{
          transform: [{ scale }],
        }}
      >
        <Card style={[styles.snackListItem, isSelected && styles.active]}>
          <SvgUri uri={snack.imageUrl} width={64} height={64} />
          <Text style={styles.title}>{snack.name}</Text>
        </Card>
      </Animated.View>
    </Pressable>
  );
};
