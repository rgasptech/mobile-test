import React from 'react';
import {Platform, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Gap, Phrase} from '~components/atoms';
import {colors} from '~constants/colors';
import {spaces} from '~constants/spaces';
import {textSizes} from '~constants/textSizes';
import styles from './styles';

interface SearchBoxProps {}

const SearchBox = ({}: SearchBoxProps) => {
  return (
    <View style={styles.container}>
      <Phrase preset="title">MailBook</Phrase>
      <Gap vertical={spaces.medium} />
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search by name"
            placeholderTextColor={colors.white90}
            style={[
              {
                color: colors.black100,
                fontSize: textSizes['14'],
                flex: 1,
              },
              Platform.OS === 'ios' && {
                paddingVertical: spaces.medium,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBox;
