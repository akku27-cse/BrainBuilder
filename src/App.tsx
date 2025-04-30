import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppNavigator from './components/navigation/AppNavigator';
import CTutorialScreen from './components/C-Tutorial/CTutorialScreen';
import CTutorialContent from './components/C-Tutorial/CTutorialContent';
import CTopicDetail from './components/C-Tutorial/CTopicDetail';

// Define the type for your navigation stack parameters
export type RootStackParamList = {
  NotificationSplash: undefined;
  CTutorial: undefined;
  CTutorialContent: undefined;
  CTopicDetail: { topic: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="NotificationSplash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6495ED',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
      >
        <Stack.Screen 
          name="NotificationSplash" 
          component={AppNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CTutorial" 
          component={CTutorialScreen}  
          options={{ 
            headerShown: false,
            title: 'C Programming',
            headerBackVisible: false // If you want to hide back button on this screen
          }}  
        />
        <Stack.Screen 
          name="CTutorialContent" 
          component={CTutorialContent}  
          options={{ 
            headerShown: false,
            title: 'C Tutorial Topics',
          }}  
        />
        <Stack.Screen 
          name="CTopicDetail" 
          component={CTopicDetail} 
          options={({ route }) => ({ 
            title: route.params.topic,
            headerBackTitle: 'Back',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// If you need to use navigation props in your components
export type CTutorialNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CTutorial'
>;

const styles = StyleSheet.create({
  // Add any global styles if needed
});