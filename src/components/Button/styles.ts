import { StyleSheet } from 'react-native';
import { colors } from '~/theme/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[500],
    padding: 16,
    borderRadius: 12,
  },
  label: {
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: colors.primary[600],
    opacity: 0.4,
  },
});
