import React from 'react';
import {View} from 'react-native';
import {Button, Gap, Phrase} from '~components/atoms';
import {colors} from '~constants/colors';
import {spaces} from '~constants/spaces';
import styles from './styles';

interface EmptyPlaceholderProps {}

const EmptyPlaceholder = ({}: EmptyPlaceholderProps) => {
  return (
    <View style={styles.container}>
      <Phrase isCenter preset="title">
        Contact Empty
      </Phrase>
      <Gap vertical={spaces.small} />
      <Phrase isCenter>Looks like you do not have any contact.</Phrase>
      <Gap vertical={spaces.semiLarge} />
      <Button style={styles.button}>
        <Phrase color={colors.white} preset="action">
          Add Contact
        </Phrase>
      </Button>
    </View>
  );
};

export default EmptyPlaceholder;
