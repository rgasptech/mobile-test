import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {DummyFlatList, Gap} from '~components/atoms';
import {ContactInfo, EditButton} from '~components/molecules';
import {Canvas, ContactHeader} from '~components/organisms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {useContactDetail, useNavigate} from '~hooks';
import {RootStackParamList} from '~types';

const ContactDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ContactDetail'>>();
  const navigation = useNavigate();

  const {id} = route?.params || {};
  const {bio, born, email, name, photo} = useContactDetail(id) || {};

  const onPressBack = () => navigation.goBack();

  const onPressEdit = () => navigation.navigate('ContactForm', {id});

  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <ContactHeader name={name} photo={photo} onPressBack={onPressBack} />
      <DummyFlatList usePadding>
        <Gap vertical={spaces.medium} />
        <ContactInfo label="Email" value={email} />
        <ContactInfo label="Date of Birth" value={born} />
        <ContactInfo label="Bio" value={bio} />
        <Gap vertical={spaces.xxlarge} />
      </DummyFlatList>
      <EditButton onPress={onPressEdit} />
    </Canvas>
  );
};

export default ContactDetail;
