import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import cppContent from './cppTutorialData.json';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 40;

const CppTutorialContent = ({ navigation, route }: any) => {
  const handleContentPress = (section: any, contentItem: any) => {
    navigation.navigate('CppContentDetail', { contentItem });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>C++ Tutorial Content</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {cppContent.sections.map((section, sectionIndex) => (
          <Animatable.View 
            key={section.id}
            animation="fadeInUp"
            delay={sectionIndex * 150}
            duration={600}
            useNativeDriver
          >
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionDescription}>{section.description}</Text>
            </View>
            
            {section.content.map((contentItem, contentIndex) => (
              <TouchableOpacity 
                key={contentItem.id}
                onPress={() => handleContentPress(section, contentItem)}
                activeOpacity={0.8}
              >
                <Animatable.View
                  animation="fadeInRight"
                  delay={contentIndex * 100 + 300}
                  duration={500}
                  useNativeDriver
                  style={styles.contentCard}
                >
                  <View style={styles.cardContent}>
                    <MaterialCommunityIcons name="code-tags" size={24} color="#00599C" />
                    <View style={styles.textContainer}>
                      <Text style={styles.contentTitle}>{contentItem.title}</Text>
                      <Text style={styles.contentDescription}>{contentItem.description}</Text>
                    </View>
                  </View>
                </Animatable.View>
              </TouchableOpacity>
            ))}
          </Animatable.View>
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
    backgroundColor: '#00599C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  sectionHeader: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00599C',
    marginBottom: 5,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
  },
  contentCard: {
    width: CARD_WIDTH,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default CppTutorialContent;