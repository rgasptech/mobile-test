import {StyleSheet} from 'react-native';
import {diagonalDp} from '~helpers';

const PROFILE_SIZE = diagonalDp(48);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},

  image: {
    width: PROFILE_SIZE,
    height: PROFILE_SIZE,
  },

  nameContainer: {flex: 1},
});

export default styles;
