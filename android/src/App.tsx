
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserLoginScreen from './components/LogingScreen/UserLoginScreen'
import OtpVerificationScreen from './components/OtpVErificationScreen/OtpVerificationScreen'
import LandingPage from './components/LandingScreen/LandingPage'
import UserRegisterScreen from './components/RegisterScreen/UserRegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import UserHomeScreen from './components/Home/UserHomeScreen'
import OTPVerified from './components/OtpVErificationScreen/OtpVerified'
import DrawerNavigator from './navigation/drawerNavigation/DrawerNavigator'
import ButtomNavigator from './navigation/buttomNavigator/ButtomNavigator'
import Profile from './components/Screens/Profile'
import MyOrder from './components/Screens/MyOrder'
import MyAppoinment from './components/Screens/MyAppoinment'
//import HelpDesk from './components/Screens/HelpDesk'
import SignOut from './components/Screens/SignOut'
import MyPets from './components/Screens/MyPets'
import HelpDesk from './components/Screens/HelpDesk';
import NearestDoctor from './components/Screens/NearestDoctor'
import Pharmacy from './components/Screens/Pharmacy'
import BookingScreen from './components/Screens/BookingScreen'
export type RootStackParamList = {
  LandingPage: undefined;
 

  UserLogin: undefined;
  UserRegister:undefined;
  Verification:{user:string,service:string,id:string,mobile_number:string};
  UserHome:undefined;
  Verified:{user:string};
  SideNavigation:undefined;
  ButomNavigation:undefined;
  profile:undefined;
  MyOrder:undefined;
  MyAppointment:undefined;
  Helpdesk:{screenName:string};
  Signout:undefined;
  mypet:undefined;
  nearestDoctor:undefined;
  pharmacy:undefined;
  Booking:undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>()
const App = () => {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LandingPage'>
    <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />

    <Stack.Screen name="UserLogin" component={UserLoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Verification" component={OtpVerificationScreen} options={{ headerShown: false }} />
    <Stack.Screen name="UserRegister" component={UserRegisterScreen} options={{ headerShown: false }} />
   
    <Stack.Screen name="UserHome" component={UserHomeScreen} options={{ headerShown: false }} />
    
    <Stack.Screen name="Verified" component={OTPVerified} options={{ headerShown: false }} />
    <Stack.Screen name='SideNavigation' component={DrawerNavigator} options={{ headerShown: false }}/>
 <Stack.Screen name='ButomNavigation' component={ButtomNavigator} options={{ headerShown: false }}/>
<Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
 <Stack.Screen name='MyOrder' component={MyOrder} options={{ headerShown: false }}/>
 <Stack.Screen name='MyAppointment' component={MyAppoinment} options={{ headerShown: false }}/>
 <Stack.Screen name='Helpdesk' component={HelpDesk} options={{ headerShown: false }}/>
 <Stack.Screen name='Signout' component={SignOut} options={{ headerShown: false }}/>
 <Stack.Screen name='mypet' component={MyPets} options={{ headerShown: false }}/>
 <Stack.Screen name='nearestDoctor' component={NearestDoctor} options={{ headerShown: false }}/>
 <Stack.Screen name='pharmacy' component={Pharmacy} options={{ headerShown: false }}/>
 <Stack.Screen name='Booking' component={BookingScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>

    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import AppNavigator from './navigation/AppNavigator'
// import { createStaticNavigation, NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const Stack=createNativeStackNavigator();

// const App = () => {
//   return (
//     <>
//    <NavigationContainer>
//     <Stack.Navigator screenOptions={{headerShown:false}}>
// <Stack.Screen name='SideNavigation' component={DrawerNavigator}/>
// <Stack.Screen name='ButomNavigation' component={ButtomNavigator}/>
// <Stack.Screen name='profile' component={Profile}/>
// <Stack.Screen name='My Order' component={MyOrder}/>
// <Stack.Screen name='MyAppointment' component={MyAppoinment}/>
// <Stack.Screen name='HelpDesk' component={HelpDesk}/>
// <Stack.Screen name='Signout' component={SignOut}/>
// <Stack.Screen name='mypet' component={MyPets}/>
//     </Stack.Navigator>
//    </NavigationContainer>
//     </>
   
//   )
// }

// export default App

// const styles = StyleSheet.create({})