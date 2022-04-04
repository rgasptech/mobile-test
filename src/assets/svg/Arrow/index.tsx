import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import ArrowIcon from './Arrow.svg';

interface ArrowProps extends SvgProps {
  iconColor?: string;
}

const size = spaces.medium;

const Arrow = ({iconColor = colors.black100}: ArrowProps) => (
  <ArrowIcon fill={iconColor} width={size} height={size} style={styles.icon} />
);

export default Arrow;

const styles = StyleSheet.create({icon: {transform: [{rotate: `90deg`}]}});
