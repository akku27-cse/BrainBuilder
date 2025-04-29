import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer';
import HomeScreen from '../screens/HomeScreen';
import DeveloperProfileScreen from '../screens/DeveloperProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerActiveTintColor: '#e91e63',
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 15, padding: 10 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <Icon name="bars" size={24} color="#000" />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
          headerShown:false,
        }}
      />
      <Drawer.Screen 
        name="Developer Profile" 
        component={DeveloperProfileScreen} 
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
          headerShown:false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;