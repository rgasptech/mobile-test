import React from 'react';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import PencilIcon from './Pencil.svg';

const size = spaces.medium;

const Pencil = ({...props}: SvgProps) => (
  <PencilIcon fill={colors.white} width={size} height={size} {...props} />
);

export default Pencil;
