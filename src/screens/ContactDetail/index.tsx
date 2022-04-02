import React from 'react';
import {View} from 'react-native';
import Assets from '~assets';
import {Button, DummyFlatList, Gap, Phrase, Picture} from '~components/atoms';
import {Canvas} from '~components/organisms';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp, winWidthPercent} from '~helpers';

const ContactDetail = () => {
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
        <View
          style={{
            width: diagonalDp(80),
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Picture borderRadius={diagonalDp(80)} />
        </View>
        <Gap vertical={spaces.medium} />
        <Phrase preset="action">Naufal Name More Than Awesome</Phrase>
        <Gap vertical={spaces.semiLarge} />
      </View>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Email</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">naufal@gmail.com</Phrase>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Date of Birth</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">03/02/2015</Phrase>
        <Gap vertical={spaces.medium} />
        <Phrase color={colors.black90}>Bio</Phrase>
        <Gap vertical={spaces.small} />
        <Phrase preset="subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget
          urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa
          convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis,
          vehicula semper ante tristique. Phasellus quis ex sit amet nulla
          sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam laoreet imperdiet enim ac dictum.
        </Phrase>
      </DummyFlatList>
      <Button
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
