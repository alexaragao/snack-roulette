import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Snack } from '~/domain/entities/Snack';
import { getSnacks } from '~/domain/use-cases/get-snacks';
import { AppStackParams } from '~/navigation/AppStack/types';
import { routes } from '~/navigation/routes';
import { SnacksUI } from './ui';

const MIN_SNACKS_SELECTED = 2;
const MAX_SNACKS_SELECTED = 10;

export type SnacksScreenProps = NativeStackScreenProps<
  AppStackParams,
  'Snacks'
>;

export const SnacksScreen: FC<SnacksScreenProps> = ({ navigation }) => {
  const [snacks, setSnacks] = useState<Snack[]>();
  const [selectedSnacks, setSelectedSnacks] = useState(new Set<Snack>());

  const handleOnSelectItem = useCallback(
    (snack: Snack) => {
      const selected = new Set(selectedSnacks.values());

      if (selected.has(snack)) {
        selected.delete(snack);
      } else {
        selected.add(snack);
      }

      setSelectedSnacks(selected);
    },
    [selectedSnacks]
  );

  const handleOnProceedPress = useCallback(() => {
    navigation.navigate(routes.Roulette, {
      snacks: Array.from(selectedSnacks),
    });
  }, [navigation, selectedSnacks]);

  const main = useCallback(async () => {
    const snacksResponse = await getSnacks();
    setSnacks(snacksResponse);
  }, []);

  useEffect(() => {
    main();
  }, []);

  const isProceedDisabled =
    selectedSnacks.size >= MIN_SNACKS_SELECTED &&
    selectedSnacks.size <= MAX_SNACKS_SELECTED;

  return (
    <SnacksUI
      snacks={snacks}
      selectedSnacks={selectedSnacks}
      canGoToRoulette={isProceedDisabled}
      maxSnacks={MAX_SNACKS_SELECTED}
      onSelectItem={handleOnSelectItem}
      onProceedPress={handleOnProceedPress}
    />
  );
};
