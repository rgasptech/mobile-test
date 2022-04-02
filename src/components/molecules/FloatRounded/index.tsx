import React from 'react';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import Assets from '~assets';
import {Button} from '~components/atoms';
import styles from './styles';

interface FloatRoundedProps {
  onPress(): void;
}

const FloatRounded = ({onPress}: FloatRoundedProps) => {
  return (
    <Animated.View
      entering={SlideInDown.delay(400)}
      exiting={SlideOutDown.delay(400)}>
      <Button onPress={onPress} style={styles.circleButton}>
        <Assets.svg.Plus />
      </Button>
    </Animated.View>
  );
};

export default FloatRounded;
