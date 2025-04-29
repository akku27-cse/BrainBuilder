import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2 - 10;

const languages = [
    { name: 'C Tutorial', icon: 'language-c', iconSet: 'MaterialCommunityIcons', color: '#6495ED', screen: 'CTutorial' },
  { name: 'C++ Tutorial', icon: 'language-cpp', iconSet: 'MaterialCommunityIcons', color: '#00599C' },
  { name: 'Java Tutorial', icon: 'language-java', iconSet: 'MaterialCommunityIcons', color: '#007396' },
  { name: 'Python Tutorial', icon: 'language-python', iconSet: 'MaterialCommunityIcons', color: '#3776AB' },
  { name: 'JavaScript Tutorial', icon: 'language-javascript', iconSet: 'MaterialCommunityIcons', color: '#F7DF1E' },
  { name: 'HTML Tutorial', icon: 'language-html5', iconSet: 'MaterialCommunityIcons', color: '#E34F26' },
  { name: 'CSS Tutorial', icon: 'language-css3', iconSet: 'MaterialCommunityIcons', color: '#1572B6' },
  { name: 'SQL Tutorial', icon: 'database', iconSet: 'MaterialCommunityIcons', color: '#4479A1' },
  { name: 'React JS Tutorial', icon: 'react', iconSet: 'FontAwesome5', color: '#61DAFB' },
  { name: 'React Native Tutorial', icon: 'react', iconSet: 'FontAwesome5', color: '#61DAFB' },
];

const HomeScreen = ({ navigation }: any) => {
    const handleCardPress = (screenName: string) => {
        navigation.navigate(screenName);
      };
  const renderIcon = (iconSet: string, iconName: string, size: number, color: string) => {
    switch (iconSet) {
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      case 'FontAwesome5':
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      default:
        return <MaterialCommunityIcons name="code" size={size} color={color} />;
    }
  };

  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}
      >
        <Icon name="bars" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>BrainBuilder</Text>
    </View>

    {/* Animated Cards */}
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.cardContainer}>
        {languages.map((lang, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleCardPress(lang.screen)}
            activeOpacity={0.8}
          >
            <Animatable.View
              animation="zoomIn"
              delay={index * 150}
              duration={600}
              useNativeDriver
              style={[
                styles.card,
                {
                  backgroundColor: lang.color,
                  transform: [
                    { perspective: 1000 },
                    { rotateX: '5deg' },
                    { rotateY: '3deg' },
                  ],
                },
              ]}
            >
              <View style={styles.iconContainer}>
                {renderIcon(lang.iconSet, lang.icon, 40, '#fff')}
              </View>
              <Text style={styles.cardText}>{lang.name}</Text>
            </Animatable.View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  menuButton: {
    marginLeft: 15,
    padding: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  scrollContent: {
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 0.8,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
