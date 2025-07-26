import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';

interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  solution: string;
  explanation: string;
}

const ReactNativePracticeDetailScreen = () => {
  const route = useRoute<any>();
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
            ]}>{problem.difficulty.toUpperCase()}</Text>
            <Text style={styles.category}>{problem.category}</Text>
          </View>
        </View>
        <Text style={styles.description}>{problem.description}</Text>
        <Text style={styles.sectionTitle}>Solution</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>{problem.solution}</Text>
        </View>
        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
          <MaterialCommunityIcons name="content-copy" size={20} color="#fff" />
          <Text style={styles.copyButtonText}>Copy Code</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Explanation</Text>
        <Text style={styles.explanation}>{problem.explanation}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  header: { backgroundColor: '#61DAFB', padding: 16 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  homeButton: { padding: 5 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  headerRightSpacer: { width: 24 },
  problemHeader: { marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#61DAFB' },
  metaContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  difficulty: { fontWeight: 'bold', marginRight: 10 },
  category: { color: '#888' },
  description: { fontSize: 16, marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
  codeBlock: { backgroundColor: '#f4f4f4', borderRadius: 8, padding: 10, marginBottom: 10 },
  codeText: { fontFamily: 'monospace', color: '#333' },
  copyButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#61DAFB', padding: 8, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 10 },
  copyButtonText: { color: '#fff', marginLeft: 6, fontWeight: 'bold' },
  explanation: { fontSize: 15, color: '#333' },
});

export default ReactNativePracticeDetailScreen;
