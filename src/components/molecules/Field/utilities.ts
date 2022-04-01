import spaces from '~constants/spaces';
import {isIos} from '~helpers';
import styles from './styles';

const style = [
  styles.input,
  isIos && {
    paddingVertical: spaces.medium,
  },
];

export {style};
