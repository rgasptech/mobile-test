import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Assets from '~assets';
import {Button, DummyFlatList, Gap, Phrase, Picture} from '~components/atoms';
import {Canvas} from '~components/organisms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp, winWidthPercent} from '~helpers';
import {useContactDetail, useNavigate} from '~hooks';
import {RootStackParamList} from '~types';

const ContactDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ContactDetail'>>();
  const navigation = useNavigate();

  const {id} = route?.params || {};
  const {bio, born, email, name, photo} = useContactDetail(id) || {};

  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <View
        style={{
          width: '100%',
          height: (winWidthPercent(100) * 9) / 16,
          backgroundColor: colors.secondary,
          paddingHorizontal: spaces.semiLarge,
          justifyContent: 'flex-end',
        }}>
        <Button
          style={{
            width: diagonalDp(48),
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: spaces.semiMedium,
            left: spaces.semiMedium,
          }}
          onPress={() => navigation.goBack()}>
          <Assets.svg.Arrow iconColor={colors.white} />
        </Button>
        <View
          style={{
            width: diagonalDp(80),
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Picture borderRadius={diagonalDp(80)} uri={photo} />
        </View>
        <Gap vertical={spaces.medium} />
        <Phrase preset="action">{name}</Phrase>
        <Gap vertical={spaces.semiLarge} />
      </View>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Email</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">{email}</Phrase>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Date of Birth</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">{born || '-'}</Phrase>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Bio</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">{bio || '-'}</Phrase>
      </DummyFlatList>
      <Button
        onPress={() => navigation.navigate('ContactForm', {id})}
        style={{
          padding: spaces.medium,
          borderRadius: spaces.small,
          backgroundColor: colors.primary,
          position: 'absolute',
          bottom: spaces.xlarge,
          right: spaces.xlarge,
          minHeight: 48,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Assets.svg.Pencil />
        <Gap horizontal={spaces.semiMedium} />
        <Phrase preset="action" color={colors.white}>
          Edit Contact
        </Phrase>
      </Button>
    </Canvas>
  );
};

export default ContactDetail;
