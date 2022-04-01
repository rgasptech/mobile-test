import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const Button = ({
  children,
  onPress,
  ...props
}: PropsWithChildren<TouchableOpacityProps>) => {
  return (
    <TouchableOpacity activeOpacity={0.75} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
