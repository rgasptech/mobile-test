import React from 'react';
import {View} from 'react-native';
import {Button, DummyFlatList, Gap, Phrase, Picture} from '~components/atoms';
import {Field, FluidButton} from '~components/molecules';
import {Canvas} from '~components/organisms';
import PhraseInput from '~components/organisms/PhraseInput';
import colors from '~constants/colors';
import spaces from '~constants/spaces';
import {diagonalDp, winWidthPercent} from '~helpers';
import {useNavigate} from '~hooks';

const ContactForm = () => {
  const navigation = useNavigate();
  return (
    <Canvas>
      <View
        style={{
          padding: spaces.small,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
        }}>
        <Button
          onPress={() => navigation.goBack()}
          style={{
            width: diagonalDp(48),
            aspectRatio: 1,
          }}></Button>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Phrase preset="action" isCenter>
            Add Contact
          </Phrase>
        </View>
        <Button
          style={{
            width: diagonalDp(48),
            aspectRatio: 1,
          }}></Button>
      </View>
      <DummyFlatList usePadding>
        <Gap vertical={spaces.medium} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: diagonalDp(128),
              aspectRatio: 1,
              borderRadius: diagonalDp(128),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Picture
              style={{
                width: diagonalDp(128),
                aspectRatio: 1,
                borderRadius: diagonalDp(128),
              }}
            />
            <Button
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: diagonalDp(48),
                aspectRatio: 1,
                backgroundColor: colors.primary,
                borderRadius: diagonalDp(48),
                borderWidth: diagonalDp(3),
                borderColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
              }}></Button>
          </View>
        </View>
        <Gap vertical={spaces.xlarge} />
        <PhraseInput label="Name" placeholder="What do we call it?" />
        <Gap vertical={spaces.semiLarge} />
        <PhraseInput
          label="Email"
          placeholder="Contact's email address?"
          keyboardType="email-address"
        />
        <Gap vertical={spaces.semiLarge} />
        <PhraseInput label="Date of Birth" placeholder="What is the age?" />
        <Gap vertical={spaces.semiLarge} />
        <PhraseInput
          label="Bio"
          placeholder={`What's going on in their mind?`}
          multiline
          maxLength={500}
        />
        <Gap vertical={spaces.semiLarge} />
      </DummyFlatList>
      <FluidButton
        style={{
          position: 'absolute',
          width: winWidthPercent(100) - spaces.semiLarge * 2,
          left: spaces.semiLarge,
          bottom: spaces.semiLarge,
        }}>
        Add Contact
      </FluidButton>
    </Canvas>
  );
};

export default ContactForm;
