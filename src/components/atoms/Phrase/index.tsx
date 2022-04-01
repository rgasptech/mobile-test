import React from 'react';
import {Text, TextProps} from 'react-native';
import {colors} from '~constants/colors';
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
  return (
    <Text
      {...props}
      style={[
        styles[preset],
        {textAlign: isCenter ? 'center' : undefined, color},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default Phrase;
