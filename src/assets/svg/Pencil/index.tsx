import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import PencilIcon from './Pencil.svg';

interface PencilProps extends SvgProps {
  color?: string;
  size?: number;
}

const Pencil = ({
  color = colors.white,
  size = spaces.medium,
  ...props
}: PencilProps) => {
  return <PencilIcon fill={color} width={size} height={size} {...props} />;
};

export default Pencil;
