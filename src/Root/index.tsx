import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactDetail, ContactList} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ContactList"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
        <Stack.Screen name="ContactList" component={ContactList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
