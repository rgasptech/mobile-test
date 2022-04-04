import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import PlusIcon from './Plus.svg';

interface PlusProps extends SvgProps {
  color?: string;
  size?: number;
}

const Plus = ({
  color = colors.white,
  size = spaces.medium,
  ...props
}: PlusProps) => {
  return <PlusIcon fill={color} width={size} height={size} {...props} />;
};

export default Plus;
