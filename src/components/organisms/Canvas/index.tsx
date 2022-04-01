import React, {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CustomStatusBar} from '~components/atoms';
import colors from '~constants/colors';
import styles from './styles';

interface CanvasProps {
  barColor?: string;
  isDarkContent?: boolean;
  backgroundColor?: string;
}

const Canvas = ({
  children,
  isDarkContent = true,
  barColor = colors.white,
  backgroundColor = colors.white100,
}: PropsWithChildren<CanvasProps>) => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar
        backgroundColor={barColor}
        barStyle={isDarkContent ? 'dark-content' : 'light-content'}
      />
      <GestureHandlerRootView style={[styles.container, {backgroundColor}]}>
        {children}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Canvas;
