import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';
import BinIcon from './Bin.svg';

interface BinProps extends SvgProps {
  color?: string;
  size?: number;
}

const Bin = ({
  color = colors.danger,
  size = diagonalDp(28),
  ...props
}: BinProps) => {
  return <BinIcon stroke={color} width={size} height={size} {...props} />;
};

export default Bin;
