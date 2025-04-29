// components/CustomDrawer.js
import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';

const CustomDrawer = (props:any) => {
  const shareApp = async () => {
    try {
      await Share.open({
        title: 'Check out this app',
        message: 'I found this awesome app, you should try it!',
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        {/* App Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/ProfilePic.png')}
            style={styles.logo}
          />
        </View>
        
        {/* Default drawer items    */}
        <DrawerItemList {...props} />
        
     
        
        {/* Share App */}
        <View style={styles.drawerItem} onTouchEnd={shareApp}>
          <Icon name="share" size={20} color="#333" style={styles.icon} />
          <Text style={styles.label}>Share App</Text>
        </View>
      </DrawerContentScrollView>
      
      {/* App Version */}
      <View style={styles.footer}>
        <Text style={styles.versionText}>
          Version {DeviceInfo.getVersion()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginLeft: 10,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    fontSize: 16,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  versionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default CustomDrawer;