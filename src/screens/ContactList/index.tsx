import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {useDispatch, useSelector} from 'react-redux';
import Assets from '~assets';
import {Button, DummyFlatList, Gap} from '~components/atoms';
import {ContactTile, GapSeparator} from '~components/molecules';
import {Canvas, EmptyPlaceholder, SearchBox} from '~components/organisms';
import colors from '~constants/colors';
import {skeleton} from '~constants/skeletons';
import spaces from '~constants/spaces';
import {useNavigate} from '~hooks';
import {dispatchAddContacts} from '~redux/actions';
import {fetchContacts} from '~services';
import {IContact, ReduxState} from '~types';
import styles from './styles';
import {keyExtractor} from './utilities';

const ContactList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {contacts} = useSelector((state: ReduxState) => state);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContactsInfo();
  }, [contacts.list]);

  const isContactAvailable = !!contacts && !!contacts?.list?.length;

  const getContactsInfo = async () => {
    if (isContactAvailable) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const {is_success, data} = await fetchContacts();
    if (is_success) dispatch(dispatchAddContacts(data));
    setIsLoading(false);
  };

  const onAddContact = () => navigation.navigate('ContactForm');

  const onContactPress = (id: string) =>
    navigation.navigate('ContactDetail', {id});

  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <DummyFlatList>
        <SearchBox editable={isContactAvailable} />
        <Gap vertical={spaces.semiLarge} />
        <SkeletonContent
          containerStyle={styles.skeleton}
          isLoading={isLoading}
          layout={skeleton.contactList}>
          {isContactAvailable ? (
            <FlatList
              data={contacts.list}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={GapSeparator}
              renderItem={renderItem(onContactPress)}
            />
          ) : (
            <EmptyPlaceholder onPress={onAddContact} />
          )}
        </SkeletonContent>
      </DummyFlatList>
      {isContactAvailable && (
        <Button onPress={onAddContact} style={styles.circleButton}>
          <Assets.svg.Plus />
        </Button>
      )}
    </Canvas>
  );
};

const renderItem =
  (onPress: (id: string) => void) =>
  ({item, index}: {item: IContact; index: number}) =>
    (
      <ContactTile
        name={item?.name}
        id={item?.id}
        uri={item?.photo}
        onPress={onPress}
        index={index}
      />
    );

export default ContactList;
