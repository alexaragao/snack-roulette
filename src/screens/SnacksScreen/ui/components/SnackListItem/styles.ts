import { StyleSheet } from 'react-native';
import { colors } from '~/theme/colors';

export const styles = StyleSheet.create({
  snackListItem: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  active: {
    borderWidth: 3,
    borderColor: colors.primary[600],
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
  },
});
