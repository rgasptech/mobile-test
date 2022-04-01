import React from 'react';
import {TextInputProps} from 'react-native';
import {Phrase, Gap} from '~components/atoms';
import {Field} from '~components/molecules';
import spaces from '~constants/spaces';

interface PhraseInputProps extends TextInputProps {
  label?: string;
}

const PhraseInput = ({label, ...props}: PhraseInputProps) => {
  return (
    <>
      {!!label && <Phrase preset="regular">{label}</Phrase>}
      <Gap vertical={spaces.small} />
      <Field {...props} />
    </>
  );
};

export default PhraseInput;
