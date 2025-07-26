const JavaTopicDetail = ({ route, navigation }: any) => {
  const { topic } = route.params;
  const topicData = javaTutorialData[topic as keyof typeof javaTutorialData];

  const handleHomePress = () => {
    navigation.navigate('NotificationSplash');
  };

  if (!topicData) {
    return (
      <View style={styles.container}></View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}></View>
    </ScrollView>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#007396' },
  homeButton: { padding: 5 },
  content: { padding: 16 },
  description: { fontSize: 16, marginBottom: 10 },
  section: { marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  codeBlock: { backgroundColor: '#f4f4f4', borderRadius: 8, padding: 10 },
  codeText: { fontFamily: 'monospace', color: '#333' },
  notes: { color: '#888', fontStyle: 'italic' },
});

export default JavaTopicDetail;
