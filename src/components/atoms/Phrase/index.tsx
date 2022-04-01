import React from 'react';
import {Text, TextProps} from 'react-native';
import styles from './styles';

interface PhraseProps extends TextProps {
  preset?: keyof typeof styles;
}

const Phrase = ({
  children,
  preset = 'regular',
  style,
  ...props
}: PhraseProps) => {
  return (
    <Text {...props} style={[styles[preset], style]}>
      {children}
    </Text>
  );
};

export default Phrase;
