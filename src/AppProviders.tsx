import { NavigationContainer } from '@react-navigation/native';
import React, { FC, ReactNode } from 'react';

export type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
