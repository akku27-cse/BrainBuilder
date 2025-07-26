interface PracticeProblem {
  id: number;
  title: string;
  description: string;
}

const HTMLPracticeDetailScreen = () => { /* ...implementation... */ };

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 16 },
  header: { backgroundColor: '#E34F26', padding: 16 },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  homeButton: { padding: 5 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  headerRightSpacer: { width: 24 },
  problemHeader: { marginBottom: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#E34F26' },
  metaContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  difficulty: { fontWeight: 'bold', marginRight: 10 },
  category: { color: '#888' },
  description: { fontSize: 16, marginBottom: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
  codeBlock: { backgroundColor: '#f4f4f4', borderRadius: 8, padding: 10, marginBottom: 10 },
  codeText: { fontFamily: 'monospace', color: '#333' },
  copyButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E34F26', padding: 8, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 10 },
  copyButtonText: { color: '#fff', marginLeft: 6, fontWeight: 'bold' },
  explanation: { fontSize: 15, color: '#333' },
});

export default HTMLPracticeDetailScreen;
