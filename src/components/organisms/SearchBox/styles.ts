import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: spaces.semiLarge,
    borderBottomRightRadius: spaces.semiLarge,
    borderBottomLeftRadius: spaces.semiLarge,
  },
});

export default styles;
