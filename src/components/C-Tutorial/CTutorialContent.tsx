import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('window');

const CTutorialContent = ({ navigation }: any) => {
  // Expanded C tutorial topics with more categories and items
  const topics = [
    {
      category: 'Getting Started',
      items: [
        { title: 'Introduction to C', icon: 'alpha-i-circle' },
        { title: 'History of C', icon: 'history' },
        { title: 'Features of C', icon: 'star-circle' },
        { title: 'Setting Up Environment', icon: 'tools' },
        { title: 'First C Program', icon: 'numeric-1-circle' },
        { title: 'Compilation Process', icon: 'cog-sync' },
      ]
    },
    {
      category: 'Basic Concepts',
      items: [
        { title: 'Variables and Constants', icon: 'variable' },
        { title: 'Data Types', icon: 'database' },
        { title: 'Keywords and Identifiers', icon: 'key-variant' },
        { title: 'Input/Output Functions', icon: 'console' },
        { title: 'Comments', icon: 'comment-text' },
        { title: 'Type Conversion', icon: 'autorenew' },
      ]
    },
    {
      category: 'Operators and Expressions',
      items: [
        { title: 'Arithmetic Operators', icon: 'plus-minus' },
        { title: 'Relational Operators', icon: 'equal' },
        { title: 'Logical Operators', icon: 'logic-and' },
        { title: 'Bitwise Operators', icon: 'bitcoin' },
        { title: 'Assignment Operators', icon: 'arrow-right-bold' },
        { title: 'Operator Precedence', icon: 'sort-numeric-ascending' },
      ]
    },
    {
      category: 'Control Flow',
      items: [
        { title: 'If-else Statements', icon: 'code-braces' },
        { title: 'Switch Case', icon: 'swap-vertical' },
        { title: 'While Loop', icon: 'reload' },
        { title: 'Do-while Loop', icon: 'repeat' },
        { title: 'For Loop', icon: 'repeat-once' },
        { title: 'Break and Continue', icon: 'exit-run' },
        { title: 'Goto Statement', icon: 'arrow-decision' },
      ]
    },
    {
      category: 'Functions',
      items: [
        { title: 'Function Basics', icon: 'function' },
        { title: 'Function Declaration', icon: 'script-text' },
        { title: 'Function Parameters', icon: 'code-parentheses' },
        { title: 'Return Statement', icon: 'keyboard-return' },
        { title: 'Recursion', icon: 'repeat-variant' },
        { title: 'Storage Classes', icon: 'warehouse' },
        { title: 'Variable Scope', icon: 'eye-circle' },
      ]
    },
    {
      category: 'Arrays and Strings',
      items: [
        { title: 'Array Basics', icon: 'code-array' },
        { title: 'Multi-dimensional Arrays', icon: 'grid' },
        { title: 'Passing Arrays to Functions', icon: 'swap-horizontal' },
        { title: 'String Basics', icon: 'format-letter-case' },
        { title: 'String Functions', icon: 'format-letter-matches' },
        { title: 'Character Arrays', icon: 'alphabetical-variant' },
      ]
    },
    {
      category: 'Pointers',
      items: [
        { title: 'Pointer Basics', icon: 'cursor-pointer' },
        { title: 'Pointer Arithmetic', icon: 'calculator-variant' },
        { title: 'Pointers and Arrays', icon: 'code-braces' },
        { title: 'Pointers to Pointers', icon: 'cursor-move' },
        { title: 'Pointers to Functions', icon: 'function-variant' },
        { title: 'Void Pointers', icon: 'help-circle' },
      ]
    },
    {
      category: 'Structures and Unions',
      items: [
        { title: 'Structure Basics', icon: 'code-brackets' },
        { title: 'Nested Structures', icon: 'nested' },
        { title: 'Arrays of Structures', icon: 'view-grid' },
        { title: 'Pointers to Structures', icon: 'cursor-default-click' },
        { title: 'Union Basics', icon: 'code-parentheses' },
        { title: 'Difference with Structures', icon: 'not-equal-variant' },
      ]
    },
    {
      category: 'File Handling',
      items: [
        { title: 'File Operations', icon: 'file-document' },
        { title: 'Opening/Closing Files', icon: 'folder-open' },
        { title: 'Reading/Writing Files', icon: 'file-edit' },
        { title: 'Binary Files', icon: 'file-binary' },
        { title: 'File Positioning', icon: 'cursor-move' },
        { title: 'Error Handling', icon: 'alert-circle' },
      ]
    },
    {
      category: 'Advanced Concepts',
      items: [
        { title: 'Dynamic Memory Allocation', icon: 'memory' },
        { title: 'Memory Management', icon: 'chip' },
        { title: 'Preprocessor Directives', icon: 'code-tags' },
        { title: 'Macros', icon: 'code-greater-than' },
        { title: 'Command Line Arguments', icon: 'console-line' },
        { title: 'Variable Arguments', icon: 'dots-horizontal' },
        { title: 'Bit Fields', icon: 'bitcoin' },
      ]
    },
    {
      category: 'Data Structures',
      items: [
        { title: 'Linked Lists', icon: 'link-variant' },
        { title: 'Stacks', icon: 'stack-overflow' },
        { title: 'Queues', icon: 'timeline' },
        { title: 'Trees', icon: 'graph-outline' },
        { title: 'Graphs', icon: 'graphql' },
        { title: 'Hash Tables', icon: 'table' },
      ]
    },
    {
      category: 'Algorithms',
      items: [
        { title: 'Sorting Algorithms', icon: 'sort-alphabetical-ascending' },
        { title: 'Searching Algorithms', icon: 'magnify' },
        { title: 'Recursive Algorithms', icon: 'repeat-variant' },
        { title: 'Complexity Analysis', icon: 'chart-line' },
      ]
    }
  ];

  const handleTopicPress = (topic: string) => {
    navigation.navigate('CTopicDetail', { topic });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>C Tutorial Topics</Text>
        <Text style={styles.headerSubtitle}>Comprehensive C Programming Guide</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {topics.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.category}</Text>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity 
                key={itemIndex} 
                onPress={() => handleTopicPress(item.title)}
                activeOpacity={0.7}
              >
                <Animatable.View
                  animation="fadeInLeft"
                  delay={itemIndex * 50}
                  duration={500}
                  useNativeDriver
                  style={styles.topicCard}
                >
                  <MaterialCommunityIcons 
                    name={item.icon} 
                    size={24} 
                    color="#6495ED" 
                    style={styles.topicIcon}
                  />
                  <Text style={styles.topicTitle}>{item.title}</Text>
                  <MaterialCommunityIcons 
                    name="chevron-right" 
                    size={24} 
                    color="#ccc" 
                  />
                </Animatable.View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#6495ED',
    paddingBottom: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e6e6e6',
    marginTop: 5,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    paddingLeft: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    borderRadius: 5,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  topicIcon: {
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  topicTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default CTutorialContent;