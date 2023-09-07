import React, { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Path, SvgUri } from 'react-native-svg';
import { Snack } from '~/domain/entities/Snack';
import { createRouletteSlices } from './roulette.utils';
import { styles } from './styles';

export interface SnackRouletteProps {
  size: number;
  snacks: Snack[];
  itemSize: number;
}

export function SnackRoulette({ size, itemSize, snacks }: SnackRouletteProps) {
  const slices = useMemo(() => createRouletteSlices(snacks.length), [snacks]);

  const sliceAngle = 360 / snacks.length;
  const rotateAngle = 90 + sliceAngle / 2;

  const rouletteRadius = size / 2;

  return (
    <View
      style={{
        height: size,
        width: size,
      }}
    >
      <Svg
        height={size}
        width={size}
        viewBox="-1 -1 2 2"
        style={{ transform: [{ rotate: `-${rotateAngle}deg` }] }}
      >
        {slices.map((slice, index) => {
          const pathData = [
            `M ${slice.startX} ${slice.startY}`, // Move
            `A 1 1 0 0 1 ${slice.endX} ${slice.endY}`, // Arc
            'L 0 0', // Line
          ].join(' ');

          return (
            <Path
              d={pathData}
              fill={snacks[index].backgroundColor}
              key={index}
            />
          );
        })}
      </Svg>

      {snacks.map((snack, index) => {
        return (
          <View
            style={[
              styles.snackSlice,
              {
                width: itemSize,
                height: itemSize,
                left: (size - itemSize) / 2,
                bottom: (size - itemSize) / 2,
              },
              {
                transform: [
                  {
                    rotate: `${index * sliceAngle}deg`,
                  },
                  {
                    translateY: -rouletteRadius + itemSize / 1.25,
                  },
                ],
              },
            ]}
            key={index}
          >
            <SvgUri uri={snack.imageUrl} height={itemSize} width={itemSize} />
          </View>
        );
      })}
    </View>
  );
}
