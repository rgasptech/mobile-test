import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {KeyboardAvoidingView, View} from 'react-native';
import {Button, DummyFlatList, Gap, Picture} from '~components/atoms';
import {FluidButton, Header} from '~components/molecules';
import {Canvas} from '~components/organisms';
import PhraseInput from '~components/organisms/PhraseInput';
import spaces from '~constants/spaces';
import {diagonalDp, isIos} from '~helpers';
import {useNavigate} from '~hooks';
import {IContact} from '~types';
import styles from './styles';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

const ContactForm = () => {
  const navigation = useNavigate();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
    getValues,
  } = useForm<IContact>({
    defaultValues: {
      name: '',
      bio: '',
      born: '',
      email: '',
      photo: '',
    },
    mode: 'onChange',
  });

  const onAdd = (data: IContact) => {
    console.log(data);
  };

  const onPickPhoto = () =>
    launchImageLibrary({mediaType: 'photo'}, (image: ImagePickerResponse) => {
      if (image.didCancel) return;
      const {uri} = !!image?.assets ? image?.assets[0] : {uri: ''};
      setValue('photo', uri || '', {shouldValidate: true});
    });

  return (
    <Canvas>
      <Header />
      <KeyboardAvoidingView
        behavior={isIos ? 'height' : 'padding'}
        keyboardVerticalOffset={40}>
        <DummyFlatList usePadding>
          <Gap vertical={spaces.medium} />
          <View style={styles.photos}>
            <View style={styles.photoContainer}>
              <Picture
                borderRadius={diagonalDp(128)}
                uri={getValues('photo')}
              />
              <Button style={styles.photoPicker} onPress={onPickPhoto}></Button>
            </View>
          </View>
          <Gap vertical={spaces.xlarge} />
          <Controller
            control={control}
            rules={{
              required: {value: true, message: 'Please provide the name'},
            }}
            render={({field: {onChange, value}}) => (
              <PhraseInput
                label="Name"
                placeholder="What do we call it?"
                onChangeText={onChange}
                value={value}
                error={!!errors.name?.message}
                errorMessage={errors.name?.message}
              />
            )}
            name="name"
          />
          <Gap vertical={spaces.semiLarge} />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Please provide the email address',
              },
            }}
            render={({field: {onChange, value}}) => (
              <PhraseInput
                label="Email"
                placeholder="Where to send the messages?"
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
                error={!!errors.email?.message}
                errorMessage={errors.email?.message}
              />
            )}
            name="email"
          />
          <Gap vertical={spaces.semiLarge} />
          <PhraseInput
            label="Date of Birth"
            placeholder="What is the age?"
            passive
            passivePress={() => console.log('what')}
          />
          <Gap vertical={spaces.semiLarge} />
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <PhraseInput
                label="Bio"
                placeholder={`What's going on in their mind?`}
                multiline
                maxLength={500}
                onChangeText={onChange}
                value={value}
                error={!!errors.bio?.message}
                errorMessage={errors.bio?.message}
              />
            )}
            name="bio"
          />
          <Gap vertical={spaces.semiLarge} />
        </DummyFlatList>
      </KeyboardAvoidingView>
      <FluidButton onPress={handleSubmit(onAdd)} style={styles.floatButton}>
        Add Contact
      </FluidButton>
    </Canvas>
  );
};

export default ContactForm;
