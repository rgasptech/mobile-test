import {StyleSheet} from 'react-native';
import {colors} from '~constants/colors';
import {textSizes} from '~constants/textSizes';

const styles = StyleSheet.create({
  action: {
    fontWeight: 'bold',
    fontSize: textSizes['16'],
  },
  regular: {
    fontSize: textSizes['14'],
  },
  title: {
    fontWeight: 'bold',
    fontSize: textSizes['24'],
  },
});

export default styles;
