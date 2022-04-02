import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import ArrowIcon from './Arrow.svg';

interface ArrowProps extends SvgProps {
  type?: 'left' | 'bottom' | 'right' | 'top';
  iconColor?: string;
  size?: number;
}

const rotationFinder = (type: ArrowProps['type']) => {
  switch (type) {
    case 'bottom':
      return 0;
    case 'left':
      return 90;
    case 'right':
      return 270;
    case 'top':
      return 0;

    default:
      return 0;
  }
};

const Arrow = ({
  type = 'left',
  iconColor = colors.black100,
  size = spaces.medium,
}: ArrowProps) => {
  const rotation = rotationFinder(type);
  return (
    <ArrowIcon
      fill={iconColor}
      width={size}
      height={size}
      style={{transform: [{rotate: `${rotation}deg`}]}}
    />
  );
};

export default Arrow;
