import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ContactDetail, ContactForm, ContactList} from '~screens';
import {RootStackParamList} from '~types';

const Stack = createStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
      <Stack.Screen name="ContactForm" component={ContactForm} />
      <Stack.Screen name="ContactList" component={ContactList} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
