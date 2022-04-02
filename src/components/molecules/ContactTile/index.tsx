import React, {memo} from 'react';
import {Text, View} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {Button, Gap, Picture} from '~components/atoms';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';
import styles from './styles';

interface ContactTileProps {
  id: string;
  name: string;
  uri?: string;
  onPress(id: string): void;
  index: number;
}

const ContactTile = ({name, uri, id, onPress, index}: ContactTileProps) => {
  const onTap = () => onPress(id);
  return (
    <Animated.View entering={FadeInDown.delay(index * 100)}>
      <Button style={styles.container} onPress={onTap}>
        <Picture uri={uri} style={styles.image} borderRadius={diagonalDp(48)} />
        <Gap horizontal={spaces.medium} />
        <View style={styles.nameContainer}>
          <Text numberOfLines={2}>{name}</Text>
        </View>
      </Button>
    </Animated.View>
  );
};

export default memo(ContactTile);
