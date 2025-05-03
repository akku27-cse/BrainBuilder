import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const CPracticeListScreen = () => {
  const navigation = useNavigation();
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from local JSON file
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
    navigation.navigate('CPracticeDetail', { problemId });
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
      <FlatList
        data={problems}
        keyExtractor={(item) => item.id.toString()}
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  problemCard: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  problemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  problemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyText: {
    fontWeight: 'bold',
  },
  categoryText: {
    color: '#3498db',
  },
  arrowIcon: {
    position: 'absolute',
    right: 16,
    top: '50%',
    marginTop: -12,
  },
});

export default CPracticeListScreen;