import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import CameraIcon from './Camera.svg';

const size = spaces.semiLarge;

const Camera = ({...props}: SvgProps) => (
  <CameraIcon fill={colors.white} width={size} height={size} {...props} />
);

export default Camera;
