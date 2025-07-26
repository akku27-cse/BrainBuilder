import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SQLTutorialContent = ({ navigation }: any) => {
  const topics = [
    {
      category: 'Basics',
      items: [
        { title: 'Introduction', icon: 'information' },
        { title: 'Database Concepts', icon: 'database' },
        { title: 'SQL Syntax', icon: 'code-braces' },
        { title: 'SELECT Statement', icon: 'magnify' },
        { title: 'WHERE Clause', icon: 'filter' },
        { title: 'ORDER BY', icon: 'sort' },
      ]
    },
    {
      category: 'Advanced',
      items: [
        { title: 'Joins', icon: 'link' },
        { title: 'Group By', icon: 'format-list-group' },
        { title: 'Subqueries', icon: 'subdirectory-arrow-right' },
      ]
    },
    {
      category: 'References',
      items: [
        { title: 'SQL Functions', icon: 'function' },
        { title: 'SQL Data Types', icon: 'format-list-bulleted' },
      ]
    }
  ];

  const handleTopicPress = (topic: string) => {
    navigation.navigate('SQLTopicDetail', { topic });
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SQL Tutorial</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={28} color="#4479A1" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {topics.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, j) => (
              <TouchableOpacity key={j} style={styles.topicItem} onPress={() => handleTopicPress(item.title)}>
                <MaterialCommunityIcons name={item.icon} size={22} color="#4479A1" style={styles.topicIcon} />
                <Text style={styles.topicText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#4479A1' },
  homeButton: { padding: 5 },
  scrollContent: { padding: 16 },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#4479A1' },
  topicItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  topicIcon: { marginRight: 10 },
  topicText: { fontSize: 16, color: '#333' },
});

export default SQLTutorialContent;
