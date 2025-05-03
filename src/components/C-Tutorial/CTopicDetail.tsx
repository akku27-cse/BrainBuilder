import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import cTutorialData from './cTutorialData.json';
import { RootStackParamList } from '../../App';

type CTopicDetailRouteProp = RouteProp<RootStackParamList, 'CTopicDetail'>;

interface CTopicDetailProps {
  route: CTopicDetailRouteProp;
  navigation: any;
}

const CTopicDetail = ({ route, navigation }: CTopicDetailProps) => {
  const { topic } = route.params;
  const topicData = cTutorialData[topic as keyof typeof cTutorialData];

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  if (!topicData) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Topic not found</Text>
        <Text>Content for this topic is not available.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons 
            name={topicData.icon || 'code-braces'} 
            size={28} 
            color="#6495ED" 
            style={styles.icon}
          />
          <Text style={styles.title}>{topic}</Text>
        </View>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={34} color="#6495ED" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        {topicData.description && (
          <Text style={styles.description}>{topicData.description}</Text>
        )}
        
        {topicData.syntax && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Syntax</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{topicData.syntax}</Text>
            </View>
          </View>
        )}
        
        {topicData.example && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Example</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{topicData.example}</Text>
            </View>
          </View>
        )}
        
        {topicData.output && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Output</Text>
            <View style={styles.codeBlock}>
              <Text style={styles.codeText}>{topicData.output}</Text>
            </View>
          </View>
        )}
        
        {topicData.explanation && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Explanation</Text>
            <Text style={styles.explanation}>{topicData.explanation}</Text>
          </View>
        )}
        
        {topicData.notes && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notes}>{topicData.notes}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  homeButton: {
    padding: 5,
  },
  content: {
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#444',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6495ED',
  },
  codeBlock: {
    backgroundColor: '#282c34',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  },
  codeText: {
    color: '#abb2bf',
    fontFamily: 'monospace',
  },
  explanation: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
  },
  notes: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default CTopicDetail;