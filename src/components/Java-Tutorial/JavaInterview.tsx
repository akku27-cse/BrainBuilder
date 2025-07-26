interface Question {
  id: number;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const JavaInterview = ({ navigation }: any) => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#007396' },
  homeButton: { padding: 5 },
  scrollContent: { padding: 16 },
  questionCard: { backgroundColor: '#f4f4f4', borderRadius: 10, marginBottom: 14, padding: 14, elevation: 2 },
  questionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  questionText: { fontSize: 16, fontWeight: 'bold', color: '#333', flex: 1 },
  answerContainer: { marginTop: 8 },
  answerText: { color: '#333', fontSize: 15 },
});

export default JavaInterview;
