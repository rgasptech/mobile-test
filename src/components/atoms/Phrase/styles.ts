import {StyleSheet} from 'react-native';
import colors from '~constants/colors';
import {textSizes} from '~constants/textSizes';

const styles = StyleSheet.create({
  action: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: textSizes['16'],
  },
  danger: {
    fontSize: textSizes['12'],
    color: colors.danger,
  },
  disabled: {
    color: colors.white70,
    fontWeight: 'bold',
    fontSize: textSizes['16'],
  },
  subheadingBold: {
    fontWeight: 'bold',
    fontSize: textSizes['16'],
  },
  regular: {
    fontSize: textSizes['14'],
  },
  subheading: {
    fontSize: textSizes['16'],
  },
  title: {
    fontWeight: 'bold',
    fontSize: textSizes['24'],
  },
});

export default styles;
