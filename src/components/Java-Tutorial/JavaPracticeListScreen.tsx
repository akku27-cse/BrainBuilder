

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const JavaPracticeListScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching problems from JSON
    const fetchProblems = async () => {
      try {
        const data = await require('./practicePrograms.json');
        setProblems(data);
      } catch (error) {
        setProblems([]);
      }
      setLoading(false);
    };
    fetchProblems();
  }, []);

  const navigateToDetail = (problemId: number) => {
    navigation.navigate('JavaPracticeDetail', { problemId });
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
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Java Practice Problems</Text>
        <View style={{ width: 40 }} />
      </View>
      <ScrollView contentContainerStyle={styles.listContent}>
        {problems.map((problem: PracticeProblem) => (
          <TouchableOpacity
            key={problem.id}
            style={styles.problemCard}
            onPress={() => navigateToDetail(problem.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.problemTitle}>{problem.title}</Text>
            <Text style={styles.problemDescription}>{problem.description}</Text>
            <View style={styles.difficultyContainer}>
              <Text style={[styles.difficultyText, { color: problem.difficulty === 'easy' ? 'green' : problem.difficulty === 'medium' ? 'orange' : 'red' }]}>
                {problem.difficulty.toUpperCase()}
              </Text>
              <Text style={styles.categoryText}>{problem.category}</Text>
            </View>
            <Text style={styles.arrowIcon}>{'>'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#007396', padding: 16 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  homeButton: { padding: 5 },
  listContent: { padding: 16 },
  problemCard: { backgroundColor: '#f4f4f4', borderRadius: 10, padding: 16, marginBottom: 12, elevation: 2 },
  problemTitle: { fontSize: 18, fontWeight: 'bold', color: '#007396' },
  problemDescription: { fontSize: 15, color: '#333', marginBottom: 8 },
  difficultyContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  difficultyText: { fontWeight: 'bold', marginRight: 10 },
  categoryText: { color: '#888' },
  arrowIcon: { color: '#007396', position: 'absolute', right: 10, top: 18 },
});

export default JavaPracticeListScreen;
