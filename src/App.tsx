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
// Define the type for your navigation stack parameters
export type RootStackParamList = {
  NotificationSplash: undefined;
  CTutorial: undefined;
  CTutorialContent: undefined;
  CTopicDetail: { topic: string };
  CInterview: undefined;
  CPractice: undefined;
  CPracticeDetail: { problemId: number };
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
    title: 'Practice Programs',
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
    title: 'Program Details',
    headerStyle: {
      backgroundColor: '#3498db',
    },
    headerTintColor: '#fff',
  }}
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