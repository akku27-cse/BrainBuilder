const HTMLTutorialContent = ({ navigation }: any) => { /* ...implementation... */ };

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#E34F26' },
  homeButton: { padding: 5 },
  scrollContent: { padding: 16 },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#E34F26' },
  topicItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  topicIcon: { marginRight: 10 },
  topicText: { fontSize: 16, color: '#333' },
});

export default HTMLTutorialContent;
