import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';

type RootStackParamList = {
  CPracticeDetail: { problemId: number };
};

type PracticeDetailRouteProp = RouteProp<RootStackParamList, 'CPracticeDetail'>;

interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  solution: string;
  explanation: string;
}

const CPracticeDetailScreen = () => {
  const route = useRoute<PracticeDetailRouteProp>();
  const navigation = useNavigation();
  const { problemId } = route.params;
  const [problem, setProblem] = useState<PracticeProblem | null>(null);

  useEffect(() => {
    const loadProblem = async () => {
      try {
        const problems = await require('./practicePrograms.json');
        const foundProblem = problems.find((p: PracticeProblem) => p.id === problemId);
        setProblem(foundProblem);
      } catch (error) {
        console.error('Error loading problem:', error);
      }
    };
    loadProblem();
  }, [problemId]);

  const copyToClipboard = () => {
    if (problem) {
      Clipboard.setString(problem.solution);
      Alert.alert('Copied!', 'The code has been copied to your clipboard.');
    }
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  if (!problem) {
    return (
      <View style={styles.container}>
        <Text>Loading problem...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
            <MaterialCommunityIcons name="home" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Practice Problem</Text>
          <View style={styles.headerRightSpacer} />
        </View>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.problemHeader}>
          <Text style={styles.title}>{problem.title}</Text>
          <View style={styles.metaContainer}>
            <Text style={[
              styles.difficulty,
              { color: problem.difficulty === 'easy' ? 'green' : problem.difficulty === 'medium' ? 'orange' : 'red' }
            ]}>
              {problem.difficulty.toUpperCase()}
            </Text>
            <Text style={styles.category}>{problem.category}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Problem Description</Text>
          <Text style={styles.description}>{problem.description}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Solution</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <MaterialCommunityIcons name="content-copy" size={20} color="#3498db" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>{problem.solution}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explanation</Text>
          <Text style={styles.explanation}>{problem.explanation}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6495ED',
    paddingVertical: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  homeButton: {
    padding: 5,
  },
  headerRightSpacer: {
    width: 24, // Same as home button for balance
  },
  container: {
    flex: 1,
    padding: 16,
  },
  problemHeader: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
  },
  difficulty: {
    fontWeight: 'bold',
    marginRight: 16,
  },
  category: {
    color: '#3498db',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {
    color: '#3498db',
    marginLeft: 4,
  },
  codeBlock: {
    backgroundColor: '#2d3436',
    borderRadius: 8,
    padding: 16,
  },
  codeText: {
    color: 'white',
    fontFamily: 'monospace',
  },
  explanation: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default CPracticeDetailScreen;