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

const SQLInterview = ({ navigation }: any) => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: 'What is SQL?',
      answer: 'SQL (Structured Query Language) is a standard language for managing and manipulating databases.',
      difficulty: 'easy'
    },
    {
      id: 2,
      question: 'What is a primary key?',
      answer: 'A primary key is a unique identifier for a record in a table.',
      difficulty: 'easy'
    },
    {
      id: 3,
      question: 'What is a JOIN in SQL?',
      answer: 'A JOIN is used to combine rows from two or more tables based on a related column.',
      difficulty: 'medium'
    },
    {
      id: 4,
      question: 'What is normalization?',
      answer: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity.',
      difficulty: 'medium'
    },
    {
      id: 5,
      question: 'What is a foreign key?',
      answer: 'A foreign key is a field in one table that uniquely identifies a row of another table.',
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
        <Text style={styles.headerTitle}>SQL Interview Q&A</Text>
        <TouchableOpacity onPress={handleHomePress} style={styles.homeButton}>
          <MaterialCommunityIcons name="home" size={28} color="#4479A1" />
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
                <MaterialCommunityIcons name={expandedQuestion === q.id ? 'chevron-up' : 'chevron-down'} size={24} color="#4479A1" />
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
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#4479A1' },
  homeButton: { padding: 5 },
  scrollContent: { padding: 16 },
  questionCard: { backgroundColor: '#f4f4f4', borderRadius: 10, marginBottom: 14, padding: 14, elevation: 2 },
  questionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  questionText: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  answerContainer: { marginTop: 8 },
  answerText: { color: '#333', fontSize: 15 },
});

export default SQLInterview;
