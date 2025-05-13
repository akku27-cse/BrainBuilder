import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import Clipboard from '@react-native-clipboard/clipboard';

const { width } = Dimensions.get('window');

const CppContentDetail = ({ route, navigation }: any) => {
  const { contentItem } = route.params;
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(contentItem.code);
    setIsCopied(true);
    Alert.alert('Copied!', 'Code copied to clipboard');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>{contentItem.title}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animatable.View
          animation="fadeInUp"
          duration={600}
          useNativeDriver
          style={styles.contentContainer}
        >
          <Text style={styles.description}>{contentItem.description}</Text>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Example Code</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <MaterialCommunityIcons 
                name={isCopied ? 'check' : 'content-copy'} 
                size={22} 
                color="#00599C" 
              />
              <Text style={styles.copyText}>{isCopied ? 'Copied!' : 'Copy'}</Text>
            </TouchableOpacity>
          </View>

          <Animatable.View
            animation="fadeIn"
            delay={300}
            duration={500}
            useNativeDriver
            style={styles.codeBlock}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <Text style={styles.codeText}>{contentItem.code}</Text>
            </ScrollView>
          </Animatable.View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Explanation</Text>
          </View>
          <Animatable.View
            animation="fadeInUp"
            delay={400}
            duration={500}
            useNativeDriver
          >
            <Text style={styles.explanation}>{contentItem.explanation}</Text>
          </Animatable.View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#00599C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00599C',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#e6f2ff',
  },
  copyText: {
    marginLeft: 5,
    color: '#00599C',
    fontWeight: '600',
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  codeText: {
    fontFamily: 'Courier New',
    fontSize: 14,
    color: '#333',
  },
  explanation: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default CppContentDetail;