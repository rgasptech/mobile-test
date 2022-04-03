import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';

const BUTTON_SIZE = diagonalDp(48);

const styles = StyleSheet.create({
  circleButton: {
    width: BUTTON_SIZE,
    aspectRatio: 1,
    backgroundColor: colors.primary,
    borderRadius: BUTTON_SIZE,
    position: 'absolute',
    bottom: spaces.xlarge,
    right: spaces.xlarge,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
