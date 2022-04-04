import {ISkeletonContentProps} from 'react-native-skeleton-content-nonexpo/lib/Constants';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';

const lists = new Array(4).fill(0).map((_, index) => ({
  key: `tile${index}`,
  width: '100%',
  height: diagonalDp(48),
  marginBottom: spaces.medium,
}));

const contactList: ISkeletonContentProps['layout'] = [...lists];

export default contactList;
