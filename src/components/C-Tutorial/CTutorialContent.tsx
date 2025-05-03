import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const CTutorialContent = ({ navigation }: any) => {
  // Updated C tutorial topics with combined Basic and Fundamentals
  
  const topics = [
    {
      category: 'Basic',
      items: [
        { title: 'C HOME', icon: 'home' },
        { title: 'C Intro', icon: 'information' },
        { title: 'C Get Started', icon: 'rocket-launch' },
        { title: 'C Syntax', icon: 'code-braces' },
        { title: 'C Output', icon: 'console' },
        { title: 'C Comments', icon: 'comment-text' },
        { title: 'C Variables', icon: 'variable' },
        { title: 'C Data Types', icon: 'database' },
        { title: 'C Constants', icon: 'lock' },
        { title: 'C Operators', icon: 'calculator-variant' },
        { title: 'C Booleans', icon: 'check-circle' },
        { title: 'C User Input', icon: 'keyboard' },
        { title: 'C Memory Address', icon: 'memory' },
      ]
    },
    {
      category: 'Control Flow',
      items: [
        { title: 'C If...Else', icon: 'code-braces' },
        { title: 'C Switch', icon: 'swap-vertical' },
        { title: 'C While Loop', icon: 'reload' },
        { title: 'C For Loop', icon: 'repeat-once' },
        { title: 'C Break/Continue', icon: 'exit-run' },
      ]
    },
    {
      category: 'Data Structures',
      items: [
        { title: 'C Arrays', icon: 'code-array' },
        { title: 'C Strings', icon: 'format-letter-case' },
        { title: 'C Pointers', icon: 'cursor-pointer' },
      ]
    },
    {
      category: 'Functions',
      items: [
        { title: 'C Functions', icon: 'function' },
        { title: 'C Function Parameters', icon: 'code-parentheses' },
        { title: 'C Scope', icon: 'eye-circle' },
        { title: 'C Function Declaration', icon: 'script-text' },
        { title: 'C Recursion', icon: 'repeat-variant' },
        { title: 'C Math Functions', icon: 'calculator' },
      ]
    },
    {
      category: 'File Handling',
      items: [
        { title: 'C Create Files', icon: 'file-plus' },
        { title: 'C Write To Files', icon: 'file-edit' },
        { title: 'C Read Files', icon: 'file-document' },
      ]
    },
    {
      category: 'Advanced Topics',
      items: [
        { title: 'C Structures', icon: 'code-brackets' },
        { title: 'C Enums', icon: 'numeric' },
        { title: 'C Memory Management', icon: 'memory' },
      ]
    },
    {
      category: 'References',
      items: [
        { title: 'C Reference', icon: 'book-open' },
        { title: 'C Keywords', icon: 'key-variant' },
        { title: 'C <stdio.h>', icon: 'file-code' },
        { title: 'C <stdlib.h>', icon: 'file-code' },
        { title: 'C <string.h>', icon: 'file-code' },
        { title: 'C <math.h>', icon: 'file-code' },
        { title: 'C <ctype.h>', icon: 'file-code' },
      ]
    },
   
  ];

  const handleTopicPress = (topic: string) => {
    navigation.navigate('CTopicDetail', { topic });
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>C Programming Tutorial</Text>
          <Text style={styles.headerSubtitle}>Learn C step by step</Text>
        </View>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={34} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {topics.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity 
                key={itemIndex} 
                onPress={() => handleTopicPress(item.title)}
                activeOpacity={0.7}
              >
                <Animatable.View
                  animation="fadeInLeft"
                  delay={itemIndex * 50}
                  duration={500}
                  useNativeDriver
                  style={styles.topicCard}
                >
                  <MaterialCommunityIcons 
                    name={item.icon} 
                    size={24} 
                    color="#6495ED" 
                    style={styles.topicIcon}
                  />
                  <Text style={styles.topicTitle}>{item.title}</Text>
                  <MaterialCommunityIcons 
                    name="chevron-right" 
                    size={24} 
                    color="#ccc" 
                  />
                </Animatable.View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6495ED',
    paddingBottom: 25,
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
  headerSubtitle: {
    fontSize: 14,
    color: '#e6e6e6',
    marginTop: 5,
  },
  homeButton: {
    padding: 5,
    marginLeft: 10,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    paddingLeft: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    borderRadius: 5,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  topicIcon: {
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  topicTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default CTutorialContent;