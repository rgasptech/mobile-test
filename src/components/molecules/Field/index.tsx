import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import styles from './styles';
import {style} from './utilities';

interface FieldProps extends TextInputProps {}

const Field = ({editable, multiline, ...props}: FieldProps) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          editable={editable}
          placeholderTextColor={colors.white90}
          style={[style, multiline && {paddingTop: spaces.medium}]}
          multiline={multiline}
          {...props}
        />
      </View>
    </View>
  );
};

export default Field;
