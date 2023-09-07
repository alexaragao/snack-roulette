import React from 'react';
import { StatusBar } from 'react-native';
import { AppProviders } from './AppProviders';
import { AppStack } from './navigation/AppStack';
import { colors } from './theme/colors';

function App(): JSX.Element {
  return (
    <AppProviders>
      <StatusBar backgroundColor={colors.background} />
      <AppStack />
    </AppProviders>
  );
}

export default App;
