import React, {useRef} from 'react';
import {LayoutChangeEvent} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gap, Phrase} from '~components/atoms';
import {Field} from '~components/molecules';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import styles from './styles';

interface SearchBoxProps {
  editable?: boolean;
  onChange(keyword: string): void;
  heightSetter(height: number): void;
  scrollY: SharedValue<number>;
}

const SearchBox = ({
  editable = true,
  onChange,
  heightSetter,
  scrollY,
}: SearchBoxProps) => {
  const textHeight = useRef(40);
  const controller = useDerivedValue(() => {
    // Collapsed search title
    if (scrollY.value > 64) return {translate: -textHeight.current, opacity: 0};
    // Expanded search title
    else return {translate: 0, opacity: 1};
  }, [scrollY.value]);

  const boxStyle = useAnimatedStyle(() => ({
    transform: [{translateY: withTiming(controller.value.translate)}],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: controller.value.opacity,
  }));

  const captureContainer = (e: LayoutChangeEvent) =>
    heightSetter(e.nativeEvent.layout.height);

  const captureTextHeight = (e: LayoutChangeEvent) =>
    (textHeight.current = e.nativeEvent.layout.height);

  return (
    <Animated.View
      style={[styles.container, boxStyle]}
      onLayout={captureContainer}>
      <Animated.View style={textStyle} onLayout={captureTextHeight}>
        <Phrase color={colors.white} preset="title">
          MailBook
        </Phrase>
        <Gap vertical={spaces.medium} />
      </Animated.View>
      <Field
        placeholder="Search by name"
        editable={editable}
        onChangeText={onChange}
      />
    </Animated.View>
  );
};

export default SearchBox;
