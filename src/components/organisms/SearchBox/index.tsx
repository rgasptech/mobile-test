import React from 'react';
import {View} from 'react-native';
import {Gap, Phrase} from '~components/atoms';
import {Field} from '~components/molecules';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import styles from './styles';

interface SearchBoxProps {
  editable?: boolean;
}

const SearchBox = ({editable = true}: SearchBoxProps) => {
  return (
    <View style={styles.container}>
      <Phrase color={colors.white} preset="title">
        MailBook
      </Phrase>
      <Gap vertical={spaces.medium} />
      <Field placeholder="Search by name" editable={editable} />
    </View>
  );
};

export default SearchBox;
