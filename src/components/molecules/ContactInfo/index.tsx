import React from 'react';
import {Gap, Phrase} from '~components/atoms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';

interface ContactInfoProps {
  value?: string;
  label: string;
}

const ContactInfo = ({value, label}: ContactInfoProps) => {
  return (
    <>
      <Phrase color={colors.black90}>{label}</Phrase>
      <Gap vertical={spaces.small} />
      <Phrase preset="subheading">{value || '-'}</Phrase>
      <Gap vertical={spaces.medium} />
    </>
  );
};

export default ContactInfo;
