import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './components/navigation/AppNavigator';
import CTutorialScreen from './components/C-Tutorial/CTutorialScreen';
import CTutorialContent from './components/C-Tutorial/CTutorialContent';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NotificationSplash">
        <Stack.Screen 
          name="NotificationSplash" 
          component={AppNavigator} 
          options={{ headerShown: false }} 
        />
              <Stack.Screen name="CTutorial" component={CTutorialScreen}  options={{ headerShown: false }}  />
              <Stack.Screen name="CTutorialContent" component={CTutorialContent}  options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});