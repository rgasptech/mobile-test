import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Button} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {FieldProps} from '~types';
import styles from './styles';
import {style} from './utilities';

const Field = ({
  editable,
  multiline,
  passive,
  passivePress,
  ...props
}: FieldProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        editable={passive ? false : editable}
        placeholderTextColor={colors.white90}
        style={[style, multiline && {paddingTop: spaces.medium}]}
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
