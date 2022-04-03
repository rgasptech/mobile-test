import {TextInputProps} from 'react-native';

interface FieldProps extends TextInputProps {
  passive?: boolean;
  passivePress?(): void;
}

export type {FieldProps};
