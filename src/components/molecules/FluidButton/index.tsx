import React, {PropsWithChildren} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {Button, Phrase} from '~components/atoms';
import colors from '~constants/colors';
import styles from './styles';

interface FluidButtonProps extends TouchableOpacityProps {}

const FluidButton = ({
  style,
  children,
  disabled,
  ...props
}: PropsWithChildren<FluidButtonProps>) => {
  const additionStyle: ViewStyle = {
    backgroundColor: disabled ? colors.white60 : colors.primary,
  };
  return (
    <Button
      style={[style, styles.container, additionStyle]}
      disabled={disabled}
      {...props}>
      <Phrase preset={disabled ? 'disabled' : 'action'}>{children}</Phrase>
    </Button>
  );
};

export default FluidButton;
