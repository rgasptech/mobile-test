import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';

const styles = StyleSheet.create({
  button: {
    width: diagonalDp(48),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    padding: spaces.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default styles;
