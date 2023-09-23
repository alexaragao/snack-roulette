import React from 'react';
import { StatusBar } from 'react-native';
import { AppProviders } from './AppProviders';
import { AppStack } from './navigation/AppStack';
import { colors } from './theme/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProviders>
        <StatusBar backgroundColor={colors.background} />
        <AppStack />
      </AppProviders>
    </GestureHandlerRootView>
  );
}

export default App;
