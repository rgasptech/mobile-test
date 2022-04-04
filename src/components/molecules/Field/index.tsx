import React from 'react';
import {TextInput, View} from 'react-native';
import {Button} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {isIos} from '~helpers';
import {FieldProps} from '~types';
import styles from './styles';

const Field = ({
  editable,
  multiline,
  passive,
  passivePress,
  ...props
}: FieldProps) => {
  const inputStyle = [
    styles.input,
    isIos && {
      paddingVertical: spaces.medium,
    },
    multiline && {paddingTop: spaces.medium},
  ];
  return (
    <View style={styles.inputContainer}>
      <TextInput
        editable={passive ? false : editable}
        placeholderTextColor={colors.white90}
        style={inputStyle}
        multiline={multiline}
        {...props}
      />
      {passive && (
        <Button onPress={passivePress} style={styles.passiveButton} />
      )}
    </View>
  );
};

export default Field;
