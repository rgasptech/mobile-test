import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {winHeightPercent} from '~helpers';

const styles = StyleSheet.create({
  button: {
    paddingVertical: spaces.semiMedium,
    paddingHorizontal: spaces.medium,
    backgroundColor: colors.primary,
    borderRadius: spaces.small,
  },

  container: {
    width: '100%',
    height: winHeightPercent(70),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
