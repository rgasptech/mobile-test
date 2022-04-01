import React from 'react';
import {FlatList, Text, TextInput, View, Platform, Image} from 'react-native';
import Assets from '~assets';
import {Button, DummyFlatList, Gap, Phrase} from '~components/atoms';
import {Canvas} from '~components/organisms';
import {colors} from '~constants/colors';
import {spaces} from '~constants/spaces';
import {textSizes} from '~constants/textSizes';
import {diagonalDp} from '~helpers';

const SCREEN_NAME = 'ContactList';

interface ContactListProps {}

const ContactList = ({}: ContactListProps) => {
  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <DummyFlatList>
        <View
          style={{
            width: '100%',
            backgroundColor: colors.secondary,
            padding: spaces.semiLarge,
            borderBottomRightRadius: spaces.semiLarge,
            borderBottomLeftRadius: spaces.semiLarge,
          }}>
          <Phrase preset="title">MailBook</Phrase>
          <Gap vertical={spaces.medium} />
          <View>
            <View
              style={{
                backgroundColor: colors.white80,
                borderRadius: spaces.small,
                paddingHorizontal: spaces.medium,
              }}>
              <TextInput
                placeholder="Search by name"
                placeholderTextColor={colors.white90}
                style={[
                  {
                    color: colors.black100,
                    fontSize: textSizes['14'],
                    flex: 1,
                  },
                  Platform.OS === 'ios' && {
                    paddingVertical: spaces.medium,
                  },
                ]}
              />
            </View>
          </View>
        </View>
        <Gap vertical={spaces.semiLarge} />
        <FlatList
          style={{
            paddingHorizontal: spaces.semiLarge,
          }}
          data={[1, 2, 3, 4]}
          keyExtractor={id => `${id}`}
          renderItem={() => (
            <View>
              <Button style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: diagonalDp(48),
                    borderRadius: diagonalDp(48),
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <Image
                    resizeMethod="resize"
                    source={Assets.images.UserPlaceholder}
                    style={{
                      width: diagonalDp(48),
                      height: diagonalDp(48),
                      borderRadius: diagonalDp(48),
                    }}
                  />
                </View>
                <Gap horizontal={spaces.medium} />
                <View style={{flex: 1}}>
                  <Text numberOfLines={2}>Naufal Fadhillah</Text>
                </View>
              </Button>
              <Gap vertical={spaces.medium} />
            </View>
          )}
        />
      </DummyFlatList>
      <Button
        style={{
          width: diagonalDp(48),
          aspectRatio: 1,
          backgroundColor: colors.primary,
          borderRadius: diagonalDp(48),
          position: 'absolute',
          bottom: spaces.xlarge,
          right: spaces.xlarge,
          justifyContent: 'center',
          alignItems: 'center',
        }}></Button>
    </Canvas>
  );
};

export default ContactList;
