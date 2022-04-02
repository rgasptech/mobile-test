import React from 'react';
import {View} from 'react-native';
import Assets from '~assets';
import {Button, Gap, Phrase, Picture} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp} from '~helpers';
import styles from './styles';

interface ContactHeaderProps {
  onPressBack(): void;
  photo?: string;
  name?: string;
}

const ContactHeader = ({onPressBack, photo, name}: ContactHeaderProps) => {
  return (
    <View style={styles.container}>
      <Button style={styles.backButton} onPress={onPressBack}>
        <Assets.svg.Arrow iconColor={colors.white} />
      </Button>
      <View style={styles.photo}>
        <Picture borderRadius={diagonalDp(80)} uri={photo} />
      </View>
      <Gap vertical={spaces.medium} />
      <Phrase preset="action">{name}</Phrase>
      <Gap vertical={spaces.semiLarge} />
    </View>
  );
};

export default ContactHeader;
