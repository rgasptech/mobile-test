import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp, winWidthPercent} from '~helpers';

const styles = StyleSheet.create({
  backButton: {
    width: diagonalDp(48),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: spaces.semiMedium,
    left: spaces.semiMedium,
  },

  container: {
    width: '100%',
    height: (winWidthPercent(100) * 9) / 16,
    backgroundColor: colors.secondary,
    paddingHorizontal: spaces.semiLarge,
    justifyContent: 'flex-end',
  },

  photo: {
    width: diagonalDp(80),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
