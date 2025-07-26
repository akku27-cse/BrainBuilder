import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;

const PythonTutorialScreen = ({ navigation }: any) => {
  const cards = [
    { 
      title: 'Tutorial', 
      description: 'Learn Python from basics to advanced', 
      icon: 'book-open-variant', 
      color: '#3776AB',
      screen: 'PythonTutorialContent'
    },
    { 
      title: 'Practice Programs', 
      description: 'Practice Python coding problems', 
      icon: 'code-tags', 
      color: '#2ecc71',
      screen: 'PythonPractice'
    },
    { 
      title: 'Interview Questions', 
      description: 'Python interview Q&A', 
      icon: 'comment-question-outline', 
      color: '#e74c3c',
      screen: 'PythonInterview'
    }
  ];

  const handleCardPress = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Python Tutorial</Text>
        </View>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={34} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {cards.map((card, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleCardPress(card.screen)}
            activeOpacity={0.8}
          >
            <Animatable.View
              animation="fadeInUp"
              delay={index * 200}
              duration={600}
              useNativeDriver
              style={[styles.card, { backgroundColor: card.color }]}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons name={card.icon} size={40} color="#fff" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                </View>
              </View>
            </Animatable.View>
          </TouchableOpacity>
        ))}
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
    padding: 20,
    backgroundColor: '#3776AB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  homeButton: {
    padding: 5,
    marginLeft: 10,
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 15,
    marginBottom: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
  },
});

export default PythonTutorialScreen;
