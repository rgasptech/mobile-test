import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: spaces.medium,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spaces.small,
    minHeight: 48,
  },
});

export default styles;
