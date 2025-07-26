import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReactJSTutorialContent = ({ navigation }: any) => {
  const topics = [
    {
      category: 'Basics',
      items: [
        { title: 'Introduction', icon: 'information' },
        { title: 'JSX', icon: 'code-braces' },
        { title: 'Components', icon: 'cube-outline' },
        { title: 'Props', icon: 'package-variant' },
        { title: 'State', icon: 'database' },
        { title: 'Events', icon: 'gesture-tap' },
      ]
    },
    {
      category: 'Advanced',
      items: [
        { title: 'Hooks', icon: 'hook' },
        { title: 'Context API', icon: 'account-group' },
        { title: 'Lifecycle', icon: 'clock-outline' },
      ]
    },
    {
      category: 'References',
      items: [
        { title: 'API Reference', icon: 'book-open' },
        { title: 'Useful Libraries', icon: 'library' },
      ]
    }
  ];

  const handleTopicPress = (topic: string) => {
    navigation.navigate('ReactJSTopicDetail', { topic });
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React JS Tutorial</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={28} color="#61DAFB" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {topics.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, j) => (
              <TouchableOpacity key={j} style={styles.topicItem} onPress={() => handleTopicPress(item.title)}>
                <MaterialCommunityIcons name={item.icon} size={22} color="#61DAFB" style={styles.topicIcon} />
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#61DAFB' },
  homeButton: { padding: 5 },
  scrollContent: { padding: 16 },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#61DAFB' },
  topicItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  topicIcon: { marginRight: 10 },
  topicText: { fontSize: 16, color: '#333' },
});

export default ReactJSTutorialContent;
