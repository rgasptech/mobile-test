import React, {PropsWithChildren} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Button, Phrase} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

interface FluidButtonProps extends TouchableOpacityProps {}

const FluidButton = ({
  style,
  children,
  ...props
}: PropsWithChildren<FluidButtonProps>) => {
  return (
    <Button
      style={[
        style,
        {
          flex: 1,
          paddingVertical: spaces.medium,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: spaces.small,
          minHeight: 48,
        },
      ]}
      {...props}>
      <Phrase preset="action">{children}</Phrase>
    </Button>
  );
};

export default FluidButton;
