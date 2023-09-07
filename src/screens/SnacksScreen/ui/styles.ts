import { StyleSheet } from 'react-native';
import { colors } from '~/theme/colors';
import { layout } from '~/theme/layout';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: layout.margin - layout.gutter / 2,
  },
  pageTitle: {
    textAlign: 'center',
  },
  item: {
    flex: 2 / layout.column,
    margin: layout.gutter / 2,
  },
  titleContainer: {
    marginHorizontal: layout.margin,
    marginVertical: 1.5 * layout.margin,
  },
  footer: {
    padding: layout.margin,
  },
  flatList: {
    flex: 1,
  },
  snacksDescription: {
    textAlign: 'center',
    marginTop: 8,
  },
});
