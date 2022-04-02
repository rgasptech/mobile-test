import React from 'react';
import {View} from 'react-native';
import Assets from '~assets';
import {Button, Phrase} from '~components/atoms';
import {useNavigate} from '~hooks';
import styles from './styles';

const Header = () => {
  const navigation = useNavigate();
  const onPressBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Button onPress={onPressBack} style={styles.button}>
        <Assets.svg.Arrow />
      </Button>
      <View style={styles.content}>
        <Phrase preset="subheadingBold" isCenter>
          Add Contact
        </Phrase>
      </View>
      <Button style={styles.button}></Button>
    </View>
  );
};

export default Header;
