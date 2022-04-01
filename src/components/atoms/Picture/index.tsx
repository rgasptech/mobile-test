import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

import {ImageProps, ImageStyle, StyleProp} from 'react-native';
import Assets from '~assets';
import colors from '~constants/colors';

type FilteredImageProps = Omit<ImageProps, 'source'>;

interface PictureProps extends FilteredImageProps {
  uri?: string | null;
  style?: StyleProp<ImageStyle>;
  placeholder?: number;
  borderRadius?: number;
}

const Picture = ({
  uri,
  style,
  placeholder = Assets.images.UserPlaceholder,
  borderRadius = 0,
  ...props
}: PictureProps) => {
  const ready = useSharedValue(1);

  const src = !!uri ? {uri} : placeholder;

  const imageStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: ready.value ? withTiming(0.8) : withDelay(200, withTiming(1))},
    ],
    opacity: ready.value ? withTiming(0) : withTiming(1),
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: ready.value,
  }));

  const onLoad = () => (ready.value = withTiming(0));

  return (
    <View style={[{borderRadius}, styles.container, style]}>
      <Animated.Image
        source={src}
        style={[{borderRadius}, imageStyle, styles.image]}
        resizeMethod="resize"
        onLoad={onLoad}
        {...props}
      />
      <Animated.View style={[styles.container, styles.overlay, overlayStyle]}>
        <ActivityIndicator size="small" color={colors.primary} />
      </Animated.View>
    </View>
  );
};

export default Picture;
