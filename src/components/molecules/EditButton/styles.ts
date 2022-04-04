import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spaces.medium,
  },

  container: {
    borderRadius: spaces.small,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: spaces.xlarge,
    right: spaces.xlarge,
    minHeight: 48,
  },
});

export default styles;
