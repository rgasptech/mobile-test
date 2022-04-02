import React from 'react';
import {Text, View} from 'react-native';
import {Button, Gap, Picture} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';

interface ContactTileProps {
  id: string;
  name: string;
  uri?: string;
  onPress(id: string): void;
}

const ContactTile = ({name, uri, id, onPress}: ContactTileProps) => {
  const onTap = () => onPress(id);
  return (
    <Button style={styles.container} onPress={onTap}>
      <Picture uri={uri} style={styles.image} />
      <Gap horizontal={spaces.medium} />
      <View style={styles.nameContainer}>
        <Text numberOfLines={2}>{name}</Text>
      </View>
    </Button>
  );
};

export default ContactTile;
