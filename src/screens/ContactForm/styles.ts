import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  floatButton: {
    position: 'absolute',
    bottom: spaces.semiLarge,
    paddingHorizontal: spaces.semiLarge,
    width: '100%',
  },
});

export default styles;
