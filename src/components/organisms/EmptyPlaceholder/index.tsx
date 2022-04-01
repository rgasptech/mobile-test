import React from 'react';
import {View} from 'react-native';
import {Button, Gap, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';

interface EmptyPlaceholderProps {
  onPress?(): void;
}

const EmptyPlaceholder = ({onPress}: EmptyPlaceholderProps) => {
  return (
    <View style={styles.container}>
      <Phrase isCenter preset="title">
        Everyone is on a party!
      </Phrase>
      <Gap vertical={spaces.small} />
      <Phrase isCenter>No one is here,</Phrase>
      <Phrase isCenter>Looks like you do not have any contact.</Phrase>
      <Gap vertical={spaces.semiLarge} />
      <Button style={styles.button} onPress={onPress}>
        <Phrase preset="action">Add Contact</Phrase>
      </Button>
    </View>
  );
};

export default EmptyPlaceholder;
