import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const ReactNativeInterview = ({ navigation }: any) => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: 'What is React Native?',
      answer: 'React Native is a framework for building native apps using React. It allows you to use JavaScript and React to create mobile applications for iOS and Android.',
      difficulty: 'easy'
    },
    {
      id: 2,
      question: 'How does React Native differ from React?',
      answer: 'React is used for building web applications, while React Native is used for building native mobile apps. React Native uses native components instead of web components.',
      difficulty: 'easy'
    },
    {
      id: 3,
      question: 'What are components in React Native?',
      answer: 'Components are the building blocks of a React Native app. They describe a part of the user interface.',
      difficulty: 'easy'
    },
    {
      id: 4,
      question: 'What is the use of Flexbox in React Native?',
      answer: 'Flexbox is used to layout components in React Native. It helps in designing responsive layouts.',
      difficulty: 'medium'
    },
    {
      id: 5,
      question: 'How do you handle navigation in React Native?',
      answer: 'Navigation in React Native is handled using libraries like React Navigation, which provides navigators such as Stack, Tab, and Drawer.',
      difficulty: 'medium'
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
        <Text style={styles.headerTitle}>React Native Interview Q&A</Text>
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

export default ReactNativeInterview;
