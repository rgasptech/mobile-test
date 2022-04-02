import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Assets from '~assets';
import {Button, Gap, Phrase} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';
import styles from './styles';

interface EditButtonProps {
  onPress(): void;
}

const EditButton = ({onPress}: EditButtonProps) => {
  const position = useSharedValue(diagonalDp(128));

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{translateY: position.value}],
  }));

  useEffect(() => {
    position.value = withDelay(500, withTiming(0));
  }, []);

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Button onPress={onPress} style={styles.button}>
        <Assets.svg.Pencil />
        <Gap horizontal={spaces.semiMedium} />
        <Phrase preset="action" color={colors.white}>
          Edit Contact
        </Phrase>
      </Button>
    </Animated.View>
  );
};

export default EditButton;
