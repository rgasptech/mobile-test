import React, {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, Phrase} from '~components/atoms';
import styles from './styles';

interface FluidButtonProps extends TouchableOpacityProps {}

const FluidButton = ({
  style,
  children,
  ...props
}: PropsWithChildren<FluidButtonProps>) => (
  <Button style={[style, styles.container]} {...props}>
    <Phrase preset="action">{children}</Phrase>
  </Button>
);

export default FluidButton;
