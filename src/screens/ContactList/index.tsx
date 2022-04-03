import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {useDispatch, useSelector} from 'react-redux';
import {DummyFlatList, Gap} from '~components/atoms';
import {ContactTile, GapSeparator} from '~components/molecules';
import FloatRounded from '~components/molecules/FloatRounded';
import {Canvas, EmptyPlaceholder, SearchBox} from '~components/organisms';
import colors from '~constants/colors';
import {skeleton} from '~constants/skeletons';
import spaces from '~constants/spaces';
import {searchContact} from '~helpers';
import {useNavigate} from '~hooks';
import {dispatchContacts} from '~redux/actions';
import {fetchContacts} from '~services';
import {IContact, ReduxState} from '~types';
import styles from './styles';
import {keyExtractor} from './utilities';

const ContactList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const {contacts} = useSelector((state: ReduxState) => state);

  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState('');

  const contactList = useMemo(
    () => searchContact(contacts.list, keyword),
    [contacts.list, keyword, isLoading],
  );

  useEffect(() => {
    getContactsInfo();
  }, [contacts.list]);

  const isContactAvailable = !!contacts && !!contacts?.list?.length;

  const isSearchEmpty = !!keyword && contactList.length === 0;

  const isShowFloatButton = (!keyword && isContactAvailable) || !isSearchEmpty;

  const getContactsInfo = async () => {
    if (isContactAvailable) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const {is_success, data} = await fetchContacts();
    if (is_success) dispatch(dispatchContacts('AddBulk', data));
    setIsLoading(false);
  };

  const onAddContact = () => navigation.navigate('ContactForm');

  const onContactPress = useCallback(
    (id: string) => navigation.navigate('ContactDetail', {id}),
    [],
  );

  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <DummyFlatList>
        <SearchBox editable={isContactAvailable} onChange={setKeyword} />
        <Gap vertical={spaces.semiLarge} />
        <SkeletonContent
          containerStyle={styles.skeleton}
          isLoading={isLoading}
          layout={skeleton.contactList}>
          {isContactAvailable ? (
            <FlatList
              listKey="contacts"
              data={contactList}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={GapSeparator}
              renderItem={renderItem(onContactPress)}
            />
          ) : (
            <EmptyPlaceholder
              desc="Looks like you do not have any contact."
              title="Everyone is on a party!"
              onPress={onAddContact}
            />
          )}
          {isSearchEmpty && (
            <EmptyPlaceholder
              desc="You could try different name or add a new one."
              title="None matched"
              onPress={onAddContact}
            />
          )}
        </SkeletonContent>
      </DummyFlatList>
      {isShowFloatButton && <FloatRounded onPress={onAddContact} />}
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
