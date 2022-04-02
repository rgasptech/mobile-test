import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import colors from '~constants/colors';
import styles from './styles';

interface PhraseProps extends TextProps {
  preset?: keyof typeof styles;
  isCenter?: boolean;
  color?: string;
}

const Phrase = ({
  children,
  preset = 'regular',
  isCenter,
  style,
  color = colors.black100,
  ...props
}: PhraseProps) => {
  const textStyle: StyleProp<TextStyle> = [
    {textAlign: isCenter ? 'center' : undefined, color},
    styles[preset],
    style,
  ];

  return (
    <Text {...props} style={textStyle}>
      {children}
    </Text>
  );
};

export default Phrase;
