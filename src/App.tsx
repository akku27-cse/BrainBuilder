import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppNavigator from './components/navigation/AppNavigator';
import CTutorialScreen from './components/C-Tutorial/CTutorialScreen';
import CTutorialContent from './components/C-Tutorial/CTutorialContent';
import CTopicDetail from './components/C-Tutorial/CTopicDetail';
import CInterview from './components/C-Tutorial/CInterview';
import CPracticeListScreen from './components/C-Tutorial/CPracticeListScreen';
import CPracticeDetailScreen from './components/C-Tutorial/CPracticeDetailScreen';
import CppTutorialScreen from './components/cpp/CppTutorialScreen';
import CppTutorialContent from './components/cpp/CppTutorialContent';
import CppContentDetail from './components/cpp/CppContentDetail';

// Define the type for your navigation stack parameters
export type RootStackParamList = {
  NotificationSplash: undefined;
  CTutorial: undefined;
  CTutorialContent: undefined;
  CTopicDetail: { topic: string };
  CInterview: undefined;
  CPractice: undefined;
  CPracticeDetail: { problemId: number };
  CppTutorial: undefined;
  CppTutorialContent: { section: any }; 
  CppContentDetail: { contentItem: any }; 
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
            headerBackVisible: false
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
            headerShown: false,
            headerBackTitle: 'Back',
          })}
        />
        <Stack.Screen 
          name="CInterview" 
          component={CInterview} 
          options={{ 
            headerShown: false,
            headerStyle: {
              backgroundColor: '#1a1a2e', 
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="CPractice" 
          component={CPracticeListScreen} 
          options={{ 
            headerShown: false,
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="CPracticeDetail" 
          component={CPracticeDetailScreen} 
          options={{ 
            headerShown: false,
            headerStyle: {
              backgroundColor: '#3498db',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="CppTutorial" 
          component={CppTutorialScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CppTutorialContent" 
          component={CppTutorialContent} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CppContentDetail" 
          component={CppContentDetail} 
          options={{ headerShown: false }}
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