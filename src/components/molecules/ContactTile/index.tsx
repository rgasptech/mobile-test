import React from 'react';
import {Text, View} from 'react-native';
import {Button, Gap, Picture} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';

interface ContactTileProps {
  id: string;
  name: string;
  uri?: string;
}

const ContactTile = ({name, uri}: ContactTileProps) => {
  return (
    <Button style={styles.container}>
      <Picture uri={uri} style={styles.image} />
      <Gap horizontal={spaces.medium} />
      <View style={styles.nameContainer}>
        <Text numberOfLines={2}>{name}</Text>
      </View>
    </Button>
  );
};

export default ContactTile;
