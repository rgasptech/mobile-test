import React from 'react';
import {View, ViewStyle} from 'react-native';
import Assets from '~assets';
import {Button, Phrase} from '~components/atoms';
import {useNavigate} from '~hooks';
import styles from './styles';

interface HeaderProps {
  label: string;
  extraAction?: boolean;
  actionPress?(): void;
}

const Header = ({label, extraAction = false, actionPress}: HeaderProps) => {
  const navigation = useNavigate();

  const opacity: ViewStyle = {opacity: extraAction ? 1 : 0};

  const onPressBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Button onPress={onPressBack} style={styles.button}>
        <Assets.svg.Arrow />
      </Button>
      <View style={styles.content}>
        <Phrase preset="subheadingBold" isCenter>
          {label}
        </Phrase>
      </View>
      <Button style={[styles.button, opacity]} onPress={actionPress}>
        <Assets.svg.Bin />
      </Button>
    </View>
  );
};

export default Header;
