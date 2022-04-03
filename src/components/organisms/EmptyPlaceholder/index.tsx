import React from 'react';
import {View} from 'react-native';
import {Button, Gap, Phrase} from '~components/atoms';
import spaces from '~constants/spaces';
import styles from './styles';

interface EmptyPlaceholderProps {
  onPress?(): void;
  title?: string;
  desc?: string;
}

const EmptyPlaceholder = ({onPress, title, desc}: EmptyPlaceholderProps) => {
  return (
    <View style={styles.container}>
      <Phrase isCenter preset="title">
        {title}
      </Phrase>
      <Gap vertical={spaces.small} />
      <Phrase isCenter>No one is here,</Phrase>
      <Phrase isCenter>{desc}</Phrase>
      <Gap vertical={spaces.semiLarge} />
      <Button style={styles.button} onPress={onPress}>
        <Phrase preset="action">Add Contact</Phrase>
      </Button>
    </View>
  );
};

export default EmptyPlaceholder;
