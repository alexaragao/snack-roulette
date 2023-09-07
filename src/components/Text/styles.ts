import { StyleSheet } from 'react-native';
import { colors } from '~/theme/colors';

export const styles = StyleSheet.create({
  text: {},
  'text-variant-primary': {
    color: colors.primary[500],
  },
  'text-variant-contrast-high': {
    color: colors.contrast.high,
  },
  'text-variant-contrast-medium': {
    color: colors.contrast.medium,
  },
  'text-variant-contrast-low': {
    color: colors.contrast.low,
  },
  'text-size-body': {
    fontSize: 16,
  },
  'text-size-title': {
    fontSize: 24,
  },
});
