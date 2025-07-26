interface PracticeProblem {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const PythonPracticeListScreen = () => {
  const navigation = useNavigation();
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { /* ...fetch logic... */ }, []);

  const navigateToDetail = (problemId: number) => { /* ... */ };
  const handleHomePress = () => { /* ... */ };

  if (loading) { /* ... */ }

  return (
    // ...UI code...
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#3776AB', padding: 16 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  homeButton: { padding: 5 },
  listContent: { padding: 16 },
  problemCard: { backgroundColor: '#f4f4f4', borderRadius: 10, padding: 16, marginBottom: 12, elevation: 2 },
  problemTitle: { fontSize: 18, fontWeight: 'bold', color: '#3776AB' },
  problemDescription: { fontSize: 15, color: '#333', marginBottom: 8 },
  difficultyContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  difficultyText: { fontWeight: 'bold', marginRight: 10 },
  categoryText: { color: '#888' },
  arrowIcon: { color: '#3776AB', position: 'absolute', right: 10, top: 18 },
});

export default PythonPracticeListScreen;
