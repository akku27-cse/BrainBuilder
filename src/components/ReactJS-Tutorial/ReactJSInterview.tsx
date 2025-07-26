import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const ReactJSInterview = ({ navigation }: any) => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: 'What is React JS?',
      answer: 'React JS is a JavaScript library for building user interfaces, maintained by Facebook.',
      difficulty: 'easy'
    },
    {
      id: 2,
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe UI structure.',
      difficulty: 'easy'
    },
    {
      id: 3,
      question: 'What are hooks in React?',
      answer: 'Hooks are functions that let you use state and other React features in functional components.',
      difficulty: 'medium'
    },
    {
      id: 4,
      question: 'What is the Virtual DOM?',
      answer: 'The Virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.',
      difficulty: 'medium'
    },
    {
      id: 5,
      question: 'How do you pass data between components?',
      answer: 'Data is passed from parent to child components using props.',
      difficulty: 'easy'
    }
  ];

  const handleExpand = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React JS Interview Q&A</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={28} color="#61DAFB" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {questions.map((q) => (
          <Animatable.View
            key={q.id}
            animation="fadeInUp"
            duration={500}
            style={styles.questionCard}
          >
            <TouchableOpacity onPress={() => handleExpand(q.id)}>
              <View style={styles.questionHeader}>
                <Text style={styles.questionText}>{q.question}</Text>
                <MaterialCommunityIcons name={expandedQuestion === q.id ? 'chevron-up' : 'chevron-down'} size={24} color="#61DAFB" />
              </View>
            </TouchableOpacity>
            {expandedQuestion === q.id && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{q.answer}</Text>
              </View>
            )}
          </Animatable.View>
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
  questionCard: { backgroundColor: '#f4f4f4', borderRadius: 10, marginBottom: 14, padding: 14, elevation: 2 },
  questionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  questionText: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  answerContainer: { marginTop: 8 },
  answerText: { color: '#333', fontSize: 15 },
});

export default ReactJSInterview;
