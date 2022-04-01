import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Button, DummyFlatList, Gap} from '~components/atoms';
import {ContactTile, GapSeparator} from '~components/molecules';
import {Canvas, SearchBox} from '~components/organisms';
import {colors} from '~constants/colors';
import {spaces} from '~constants/spaces';
import styles from './styles';

const ContactList = () => {
  const keyExtractor = ({id}: typeof fetched[0]) => `${id}`;

  const renderItem = ({item}: {item: typeof fetched[0]}) => (
    <ContactTile name={item?.name} id={item?.id} uri={item?.photo} />
  );

  return (
    <Canvas barColor={colors.secondary} isDarkContent={false}>
      <DummyFlatList>
        <SearchBox />
        <Gap vertical={spaces.semiLarge} />
        <FlatList
          style={styles.flatlist}
          data={fetched}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={GapSeparator}
          renderItem={renderItem}
        />
      </DummyFlatList>
      <Button style={styles.circleButton}></Button>
    </Canvas>
  );
};

export default ContactList;

const fetched = [
  {
    name: 'Name Person1',
    id: '2rxqwxsd',
    email: 'person1@email.com',
    born: '01/01/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo1.jpg',
  },
  {
    name: 'Name Person2',
    id: 'qwtasdf',
    email: 'person2@email.com',
    born: '02/02/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo2.jpg',
  },
  {
    name: 'Name Person3',
    id: 'rq2rsfd',
    email: 'person3@email.com',
    born: '01/03/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo3.jpg',
  },
  {
    name: 'Name Person4',
    id: 'r2qsdfasdf',
    email: 'person4@email.com',
    born: '01/04/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo4.jpg',
  },
  {
    name: 'Name Person5',
    id: 'fq3tafsd',
    email: 'person5@email.com',
    born: '01/05/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo5.jpg',
  },
  {
    name: 'Name Person6',
    id: 'fastqwrqwe',
    email: 'person6@email.com',
    born: '01/06/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo6.jpg',
  },
  {
    name: 'Name Person7',
    id: 'fqrasdfaw4',
    email: 'person7@email.com',
    born: '02/07/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo7.jpg',
  },
  {
    name: 'Name Person8',
    id: '25safadr',
    email: 'person8@email.com',
    born: '01/08/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo8.jpg',
  },
  {
    name: 'Name Person9',
    id: 'q2345dsfasf',
    email: 'person9@email.com',
    born: '01/99/2015',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget urna a quam porta imperdiet. Nullam et tortor risus. Ut blandit massa convallis ligula aliquam hendrerit. Ut sodales sem non arcu facilisis, vehicula semper ante tristique. Phasellus quis ex sit amet nulla sagittis blandit et in tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet imperdiet enim ac dictum.',
    photo: 'https://s3-sa-east-1.amazonaws.com/rgasp-mobile-test/v1/photo9.jpg',
  },
];
