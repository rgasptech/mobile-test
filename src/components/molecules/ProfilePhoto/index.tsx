import React from 'react';
import {View} from 'react-native';
import Assets from '~assets';
import {Button, Picture} from '~components/atoms';
import {diagonalDp} from '~helpers';
import styles from './styles';

interface ProfilePhotoProps {
  uri?: string;
  onPress(): void;
}

const ProfilePhoto = ({uri, onPress}: ProfilePhotoProps) => {
  return (
    <View style={styles.photos}>
      <View style={styles.photoContainer}>
        <Picture borderRadius={diagonalDp(128)} uri={uri} />
        <Button style={styles.photoPicker} onPress={onPress}>
          <Assets.svg.Camera />
        </Button>
      </View>
    </View>
  );
};

export default ProfilePhoto;
