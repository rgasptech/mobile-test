import React, {PropsWithChildren} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';

interface CanvasProps {}

const Canvas = ({children}: PropsWithChildren<CanvasProps>) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        {children}
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Canvas;
