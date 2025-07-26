import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const SQLPracticeListScreen = () => {
  const navigation = useNavigation();
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProblems = async () => {
      try {
        const response = await require('./practicePrograms.json');
        setProblems(response);
      } catch (error) {
        console.error('Error loading problems:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProblems();
  }, []);

  const navigateToDetail = (problemId: number) => {
    navigation.navigate('SQLPracticeDetail', { problemId });
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading problems...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Practice Programs</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={problems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.problemCard}
            onPress={() => navigateToDetail(item.id)}
          >
            <Text style={styles.problemTitle}>{item.title}</Text>
            <Text style={styles.problemDescription}>{item.description}</Text>
            <View style={styles.difficultyContainer}>
              <Text style={[
                styles.difficultyText,
                { color: item.difficulty === 'easy' ? 'green' : item.difficulty === 'medium' ? 'orange' : 'red' }
              ]}>
                {item.difficulty.toUpperCase()}
              </Text>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} style={styles.arrowIcon} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#4479A1', padding: 16 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  homeButton: { padding: 5 },
  listContent: { padding: 16 },
  problemCard: { backgroundColor: '#f4f4f4', borderRadius: 10, padding: 16, marginBottom: 12, elevation: 2 },
  problemTitle: { fontSize: 18, fontWeight: 'bold', color: '#4479A1' },
  problemDescription: { fontSize: 15, color: '#333', marginBottom: 8 },
  difficultyContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  difficultyText: { fontWeight: 'bold', marginRight: 10 },
  categoryText: { color: '#888' },
  arrowIcon: { color: '#4479A1', position: 'absolute', right: 10, top: 18 },
});

export default SQLPracticeListScreen;
