import {StyleSheet} from 'react-native';
import {colors} from '~constants/colors';
import {textSizes} from '~constants/textSizes';

const styles = StyleSheet.create({
  regular: {
    color: colors.black100,
    fontSize: textSizes['14'],
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: textSizes['24'],
  },
});

export default styles;
