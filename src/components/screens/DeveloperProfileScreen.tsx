import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Linking,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export class DeveloperProfileScreen extends Component {
  handleSocialLink = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  handlePhonePress = () => {
    const phoneNumber = '918945007301';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  handleEmailPress = () => {
    const email = 'santujana1827@gmail.com';
    Linking.openURL(`mailto:${email}`);
  };

  handleAddressPress = () => {
    const address = '22.250997, 87.892777';
    const url = Platform.select({
      ios: `maps:0,0?q=${address}`,
      android: `geo:0,0?q=${address}`
    });
    Linking.openURL(url!);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View 
          animation="fadeInDown" 
          duration={1000}
          style={styles.header}
        >
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('../../assets/profileimage.png')}
            style={styles.profileImage}
          />
          <Animatable.Text 
            animation="fadeIn" 
            delay={500}
            style={styles.name}
          >
            Santu Jana
          </Animatable.Text>
        </Animatable.View>

        <Animatable.View 
          animation="fadeInUp" 
          duration={1000}
          style={styles.detailsContainer}
        >
          {/* Address - Clickable for Maps */}
          <Animatable.View 
            animation="fadeInRight" 
            delay={300}
          >
            <TouchableOpacity 
              style={styles.detailItem}
              onPress={this.handleAddressPress}
              activeOpacity={0.7}
            >
              <MaterialIcons name="location-on" size={24} color="#3498db" />
              <Text style={styles.detailText}>
                Dakshin Narikelda, Purba Medinipur, West Bengal 721648
              </Text>
              <MaterialIcons name="chevron-right" size={20} color="#ccc" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Phone - Clickable for Calling */}
          <Animatable.View 
            animation="fadeInRight" 
            delay={400}
          >
            <TouchableOpacity 
              style={styles.detailItem}
              onPress={this.handlePhonePress}
              activeOpacity={0.7}
            >
              <MaterialIcons name="phone" size={24} color="#2ecc71" />
              <Text style={styles.detailText}>+91 8945007301</Text>
              <MaterialIcons name="chevron-right" size={20} color="#ccc" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Email - Clickable for Email Client */}
          <Animatable.View 
            animation="fadeInRight" 
            delay={500}
          >
            <TouchableOpacity 
              style={styles.detailItem}
              onPress={this.handleEmailPress}
              activeOpacity={0.7}
            >
              <MaterialIcons name="email" size={24} color="#e74c3c" />
              <Text style={styles.detailText}>santujana1827@gmail.com</Text>
              <MaterialIcons name="chevron-right" size={20} color="#ccc" />
            </TouchableOpacity>
          </Animatable.View>

          {/* Education */}
          <Animatable.View 
            animation="fadeInRight" 
            delay={600}
            style={styles.detailItem}
          >
            <Ionicons name="school" size={24} color="#9b59b6" />
            <Text style={styles.detailText}>BTech in Computer Science & Engineering</Text>
          </Animatable.View>
        </Animatable.View>

        {/* Social Links */}
        <Animatable.View 
          animation="fadeInUp" 
          delay={700}
          style={styles.socialContainer}
        >
          <Text style={styles.socialTitle}>Connect with me</Text>
          
          <View style={styles.socialIcons}>
            {/* Facebook */}
            <Animatable.View animation="pulse" delay={800} iterationCount="infinite">
              <TouchableOpacity onPress={() => this.handleSocialLink('https://www.facebook.com/profile.php?id=100044629248185')}>
                <Icon name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
              </TouchableOpacity>
            </Animatable.View>

            {/* Instagram */}
            <Animatable.View animation="pulse" delay={850} iterationCount="infinite">
              <TouchableOpacity onPress={() => this.handleSocialLink('https://www.instagram.com/ak_assh')}>
                <Icon name="instagram" size={30} color="#e1306c" style={styles.socialIcon} />
              </TouchableOpacity>
            </Animatable.View>

            {/* YouTube */}
            <Animatable.View animation="pulse" delay={900} iterationCount="infinite">
              <TouchableOpacity onPress={() => this.handleSocialLink('https://www.youtube.com/channel/UCf78dGC6eVUVr3VaNpSY-rQ')}>
                <Icon name="youtube" size={30} color="#ff0000" style={styles.socialIcon} />
              </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="pulse" delay={900} iterationCount="infinite">
              <TouchableOpacity onPress={() => this.handleSocialLink('https://www.linkedin.com/in/santu-jana-29a923257')}>
                <Icon name="linkedin" size={30} color="blue" style={styles.socialIcon} />
              </TouchableOpacity>
            </Animatable.View>
            {/* GitHub */}
            <Animatable.View animation="pulse" delay={950} iterationCount="infinite">
              <TouchableOpacity onPress={() => this.handleSocialLink('https://github.com/akku27-cse')}>
                <Icon name="github" size={30} color="#333" style={styles.socialIcon} />
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#3498db',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 5,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 15,
    marginRight: 10,
    color: '#34495e',
    flex: 1,
  },
  socialContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  socialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcon: {
    padding: 10,
  },
});

export default DeveloperProfileScreen;