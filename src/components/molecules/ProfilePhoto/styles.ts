import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import {diagonalDp} from '~helpers';

const styles = StyleSheet.create({
  photoContainer: {
    width: diagonalDp(128),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoPicker: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: diagonalDp(48),
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderRadius: diagonalDp(48),
    borderWidth: diagonalDp(3),
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 48,
  },
  photos: {justifyContent: 'center', alignItems: 'center'},
});

export default styles;
