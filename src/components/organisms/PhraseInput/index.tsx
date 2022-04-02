import React from 'react';
import {Gap, Phrase} from '~components/atoms';
import {Field} from '~components/molecules';
import spaces from '~constants/spaces';
import {FieldProps} from '~types';

interface PhraseInputProps extends FieldProps {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const PhraseInput = ({
  label,
  error,
  errorMessage,
  ...props
}: PhraseInputProps) => {
  return (
    <>
      {!!label && <Phrase preset="regular">{label}</Phrase>}
      <Gap vertical={spaces.small} />
      <Field {...props} />
      <Gap vertical={spaces.xsmall} />
      {error && <Phrase preset="danger">{errorMessage}</Phrase>}
    </>
  );
};

export default PhraseInput;
