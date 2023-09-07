import { StyleSheet } from 'react-native';
import { colors } from '~/theme/colors';
import { layout } from '~/theme/layout';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.background,
  },
  snackTitle: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
    padding: layout.margin,
  },
  invisible: {
    display: 'none',
  },
  title: {
    fontSize: 52,
    fontWeight: '600',
    textAlign: 'center',
  },
  rouletteContainer: {
    marginTop: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
