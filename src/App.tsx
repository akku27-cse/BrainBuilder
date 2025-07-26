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
// Java Tutorial
import JavaTutorialScreen from './components/Java-Tutorial/JavaTutorialScreen';
import JavaTutorialContent from './components/Java-Tutorial/JavaTutorialContent';
import JavaTopicDetail from './components/Java-Tutorial/JavaTopicDetail';
import JavaInterview from './components/Java-Tutorial/JavaInterview';
import JavaPracticeListScreen from './components/Java-Tutorial/JavaPracticeListScreen';
import JavaPracticeDetailScreen from './components/Java-Tutorial/JavaPracticeDetailScreen';
// Python Tutorial
import PythonTutorialScreen from './components/Python-Tutorial/PythonTutorialScreen';
import PythonTutorialContent from './components/Python-Tutorial/PythonTutorialContent';
import PythonTopicDetail from './components/Python-Tutorial/PythonTopicDetail';
import PythonInterview from './components/Python-Tutorial/PythonInterview';
import PythonPracticeListScreen from './components/Python-Tutorial/PythonPracticeListScreen';
import PythonPracticeDetailScreen from './components/Python-Tutorial/PythonPracticeDetailScreen';
// JavaScript Tutorial
import JavaScriptTutorialScreen from './components/JavaScript-Tutorial/JavaScriptTutorialScreen';
import JavaScriptTutorialContent from './components/JavaScript-Tutorial/JavaScriptTutorialContent';
import JavaScriptTopicDetail from './components/JavaScript-Tutorial/JavaScriptTopicDetail';
import JavaScriptInterview from './components/JavaScript-Tutorial/JavaScriptInterview';
import JavaScriptPracticeListScreen from './components/JavaScript-Tutorial/JavaScriptPracticeListScreen';
import JavaScriptPracticeDetailScreen from './components/JavaScript-Tutorial/JavaScriptPracticeDetailScreen';
// HTML Tutorial
import HTMLTutorialScreen from './components/HTML-Tutorial/HTMLTutorialScreen';
import HTMLTutorialContent from './components/HTML-Tutorial/HTMLTutorialContent';
import HTMLTopicDetail from './components/HTML-Tutorial/HTMLTopicDetail';
import HTMLInterview from './components/HTML-Tutorial/HTMLInterview';
import HTMLPracticeListScreen from './components/HTML-Tutorial/HTMLPracticeListScreen';
import HTMLPracticeDetailScreen from './components/HTML-Tutorial/HTMLPracticeDetailScreen';
// CSS Tutorial
import CSSTutorialScreen from './components/CSS-Tutorial/CSSTutorialScreen';
import CSSTutorialContent from './components/CSS-Tutorial/CSSTutorialContent';
import CSSTopicDetail from './components/CSS-Tutorial/CSSTopicDetail';
import CSSInterview from './components/CSS-Tutorial/CSSInterview';
import CSSPracticeListScreen from './components/CSS-Tutorial/CSSPracticeListScreen';
import CSSPracticeDetailScreen from './components/CSS-Tutorial/CSSPracticeDetailScreen';
// SQL Tutorial
import SQLTutorialScreen from './components/SQL-Tutorial/SQLTutorialScreen';
import SQLTutorialContent from './components/SQL-Tutorial/SQLTutorialContent';
import SQLTopicDetail from './components/SQL-Tutorial/SQLTopicDetail';
import SQLInterview from './components/SQL-Tutorial/SQLInterview';
import SQLPracticeListScreen from './components/SQL-Tutorial/SQLPracticeListScreen';
import SQLPracticeDetailScreen from './components/SQL-Tutorial/SQLPracticeDetailScreen';
// React JS Tutorial
import ReactJSTutorialScreen from './components/ReactJS-Tutorial/ReactJSTutorialScreen';
import ReactJSTutorialContent from './components/ReactJS-Tutorial/ReactJSTutorialContent';
import ReactJSTopicDetail from './components/ReactJS-Tutorial/ReactJSTopicDetail';
import ReactJSInterview from './components/ReactJS-Tutorial/ReactJSInterview';
import ReactJSPracticeListScreen from './components/ReactJS-Tutorial/ReactJSPracticeListScreen';
import ReactJSPracticeDetailScreen from './components/ReactJS-Tutorial/ReactJSPracticeDetailScreen';
// React Native Tutorial
import ReactNativeTutorialScreen from './components/ReactNative-Tutorial/ReactNativeTutorialScreen';
import ReactNativeTutorialContent from './components/ReactNative-Tutorial/ReactNativeTutorialContent';
import ReactNativeTopicDetail from './components/ReactNative-Tutorial/ReactNativeTopicDetail';
import ReactNativeInterview from './components/ReactNative-Tutorial/ReactNativeInterview';
import ReactNativePracticeListScreen from './components/ReactNative-Tutorial/ReactNativePracticeListScreen';
import ReactNativePracticeDetailScreen from './components/ReactNative-Tutorial/ReactNativePracticeDetailScreen';

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
  // Java
  JavaTutorial: undefined;
  JavaTutorialContent: undefined;
  JavaTopicDetail: { topic: string };
  JavaInterview: undefined;
  JavaPractice: undefined;
  JavaPracticeDetail: { problemId: number };
  // Python
  PythonTutorial: undefined;
  PythonTutorialContent: undefined;
  PythonTopicDetail: { topic: string };
  PythonInterview: undefined;
  PythonPractice: undefined;
  PythonPracticeDetail: { problemId: number };
  // JavaScript
  JavaScriptTutorial: undefined;
  JavaScriptTutorialContent: undefined;
  JavaScriptTopicDetail: { topic: string };
  JavaScriptInterview: undefined;
  JavaScriptPractice: undefined;
  JavaScriptPracticeDetail: { problemId: number };
  // HTML
  HTMLTutorial: undefined;
  HTMLTutorialContent: undefined;
  HTMLTopicDetail: { topic: string };
  HTMLInterview: undefined;
  HTMLPractice: undefined;
  HTMLPracticeDetail: { problemId: number };
  // CSS
  CSSTutorial: undefined;
  CSSTutorialContent: undefined;
  CSSTopicDetail: { topic: string };
  CSSInterview: undefined;
  CSSPractice: undefined;
  CSSPracticeDetail: { problemId: number };
  // SQL
  SQLTutorial: undefined;
  SQLTutorialContent: undefined;
  SQLTopicDetail: { topic: string };
  SQLInterview: undefined;
  SQLPractice: undefined;
  SQLPracticeDetail: { problemId: number };
  // React JS
  ReactJSTutorial: undefined;
  ReactJSTutorialContent: undefined;
  ReactJSTopicDetail: { topic: string };
  ReactJSInterview: undefined;
  ReactJSPractice: undefined;
  ReactJSPracticeDetail: { problemId: number };
  // React Native
  ReactNativeTutorial: undefined;
  ReactNativeTutorialContent: undefined;
  ReactNativeTopicDetail: { topic: string };
  ReactNativeInterview: undefined;
  ReactNativePractice: undefined;
  ReactNativePracticeDetail: { problemId: number };
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
        {/* C Tutorial */}
        <Stack.Screen name="CTutorial" component={CTutorialScreen} options={{ headerShown: false, title: 'C Programming', headerBackVisible: false }} />
        <Stack.Screen name="CTutorialContent" component={CTutorialContent} options={{ headerShown: false, title: 'C Tutorial Topics' }} />
        <Stack.Screen name="CTopicDetail" component={CTopicDetail} options={{ headerShown: false, headerBackTitle: 'Back' }} />
        <Stack.Screen name="CInterview" component={CInterview} options={{ headerShown: false, headerStyle: { backgroundColor: '#1a1a2e' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="CPractice" component={CPracticeListScreen} options={{ headerShown: false, headerStyle: { backgroundColor: '#3498db' }, headerTintColor: '#fff' }} />
        <Stack.Screen name="CPracticeDetail" component={CPracticeDetailScreen} options={{ headerShown: false, headerStyle: { backgroundColor: '#3498db' }, headerTintColor: '#fff' }} />
        {/* C++ Tutorial */}
        <Stack.Screen name="CppTutorial" component={CppTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CppTutorialContent" component={CppTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="CppContentDetail" component={CppContentDetail} options={{ headerShown: false }} />
        {/* Java Tutorial */}
        <Stack.Screen name="JavaTutorial" component={JavaTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JavaTutorialContent" component={JavaTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="JavaTopicDetail" component={JavaTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="JavaInterview" component={JavaInterview} options={{ headerShown: false }} />
        <Stack.Screen name="JavaPractice" component={JavaPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JavaPracticeDetail" component={JavaPracticeDetailScreen} options={{ headerShown: false }} />
        {/* Python Tutorial */}
        <Stack.Screen name="PythonTutorial" component={PythonTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PythonTutorialContent" component={PythonTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="PythonTopicDetail" component={PythonTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="PythonInterview" component={PythonInterview} options={{ headerShown: false }} />
        <Stack.Screen name="PythonPractice" component={PythonPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PythonPracticeDetail" component={PythonPracticeDetailScreen} options={{ headerShown: false }} />
        {/* JavaScript Tutorial */}
        <Stack.Screen name="JavaScriptTutorial" component={JavaScriptTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JavaScriptTutorialContent" component={JavaScriptTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="JavaScriptTopicDetail" component={JavaScriptTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="JavaScriptInterview" component={JavaScriptInterview} options={{ headerShown: false }} />
        <Stack.Screen name="JavaScriptPractice" component={JavaScriptPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="JavaScriptPracticeDetail" component={JavaScriptPracticeDetailScreen} options={{ headerShown: false }} />
        {/* HTML Tutorial */}
        <Stack.Screen name="HTMLTutorial" component={HTMLTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HTMLTutorialContent" component={HTMLTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="HTMLTopicDetail" component={HTMLTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="HTMLInterview" component={HTMLInterview} options={{ headerShown: false }} />
        <Stack.Screen name="HTMLPractice" component={HTMLPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HTMLPracticeDetail" component={HTMLPracticeDetailScreen} options={{ headerShown: false }} />
        {/* CSS Tutorial */}
        <Stack.Screen name="CSSTutorial" component={CSSTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CSSTutorialContent" component={CSSTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="CSSTopicDetail" component={CSSTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="CSSInterview" component={CSSInterview} options={{ headerShown: false }} />
        <Stack.Screen name="CSSPractice" component={CSSPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CSSPracticeDetail" component={CSSPracticeDetailScreen} options={{ headerShown: false }} />
        {/* SQL Tutorial */}
        <Stack.Screen name="SQLTutorial" component={SQLTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SQLTutorialContent" component={SQLTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="SQLTopicDetail" component={SQLTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="SQLInterview" component={SQLInterview} options={{ headerShown: false }} />
        <Stack.Screen name="SQLPractice" component={SQLPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SQLPracticeDetail" component={SQLPracticeDetailScreen} options={{ headerShown: false }} />
        {/* React JS Tutorial */}
        <Stack.Screen name="ReactJSTutorial" component={ReactJSTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReactJSTutorialContent" component={ReactJSTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="ReactJSTopicDetail" component={ReactJSTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="ReactJSInterview" component={ReactJSInterview} options={{ headerShown: false }} />
        <Stack.Screen name="ReactJSPractice" component={ReactJSPracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReactJSPracticeDetail" component={ReactJSPracticeDetailScreen} options={{ headerShown: false }} />
        {/* React Native Tutorial */}
        <Stack.Screen name="ReactNativeTutorial" component={ReactNativeTutorialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReactNativeTutorialContent" component={ReactNativeTutorialContent} options={{ headerShown: false }} />
        <Stack.Screen name="ReactNativeTopicDetail" component={ReactNativeTopicDetail} options={{ headerShown: false }} />
        <Stack.Screen name="ReactNativeInterview" component={ReactNativeInterview} options={{ headerShown: false }} />
        <Stack.Screen name="ReactNativePractice" component={ReactNativePracticeListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReactNativePracticeDetail" component={ReactNativePracticeDetailScreen} options={{ headerShown: false }} />
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