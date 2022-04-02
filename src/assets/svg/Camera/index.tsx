import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import CameraIcon from './Camera.svg';

interface CameraProps extends SvgProps {
  color?: string;
  size?: number;
}

const Camera = ({
  color = colors.white,
  size = spaces.medium,
  ...props
}: CameraProps) => {
  return <CameraIcon fill={color} width={size} height={size} {...props} />;
};

export default Camera;
