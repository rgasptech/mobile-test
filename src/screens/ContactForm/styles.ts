import {StyleSheet} from 'react-native';
import spaces from '~constants/spaces';
import {winWidthPercent} from '~helpers';

const styles = StyleSheet.create({
  floatButton: {
    position: 'absolute',
    width: winWidthPercent(100) - spaces.semiLarge * 2,
    left: spaces.semiLarge,
    bottom: spaces.semiLarge,
  },
});

export default styles;
