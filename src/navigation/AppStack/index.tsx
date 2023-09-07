import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RouletteScreen } from '~/screens/RouletteScreen';
import { SnacksScreen } from '~/screens/SnacksScreen';
import { routes } from '../routes';
import { AppStackParams } from './types';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParams>();

export function AppStack() {
  return (
    <Navigator
      initialRouteName={routes.Snacks}
      screenOptions={{ headerShown: false }}
    >
      <Screen name={routes.Snacks} component={SnacksScreen} />
      <Screen name={routes.Roulette} component={RouletteScreen} />
    </Navigator>
  );
}
