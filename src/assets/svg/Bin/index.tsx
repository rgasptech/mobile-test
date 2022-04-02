import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import {diagonalDp} from '~helpers';
import BinIcon from './Bin.svg';

const size = diagonalDp(28);

const Bin = ({...props}: SvgProps) => (
  <BinIcon stroke={colors.danger} width={size} height={size} {...props} />
);

export default Bin;
