import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reactJSTutorialData from './reactJSTutorialData.json';

const ReactJSTopicDetail = ({ route, navigation }: any) => {
  const { topic } = route.params;
  const topicData = reactJSTutorialData[topic as keyof typeof reactJSTutorialData];

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
            name={topicData.icon || 'react'} 
            size={28} 
            color="#61DAFB" 
            style={styles.icon}
          />
          <Text style={styles.title}>{topic}</Text>
        </View>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={34} color="#61DAFB" />
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
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#61DAFB' },
  homeButton: { padding: 5 },
  content: { padding: 16 },
  description: { fontSize: 16, marginBottom: 10 },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  codeBlock: { backgroundColor: '#f4f4f4', borderRadius: 8, padding: 10 },
  codeText: { fontFamily: 'monospace', color: '#333' },
  notes: { color: '#888', fontStyle: 'italic' },
});

export default ReactJSTopicDetail;
