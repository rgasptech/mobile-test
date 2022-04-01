import React from 'react';
import {StatusBar, StatusBarStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
}: {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
}) => {
  const insets = useSafeAreaInsets();
  const containerStyle = {height: insets.top, backgroundColor};
  return (
    <View style={containerStyle}>
      <StatusBar
        animated
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default CustomStatusBar;
