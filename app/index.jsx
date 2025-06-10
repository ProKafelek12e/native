import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Card, Text, Button, TextInput, Title } from 'react-native-paper';

export default function App() {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = React.useState(['wbić 10 lvl faceit', 'Zdać z geografii']);

  const addTask = () => {
    if (task.trim()) {
      setTasks(prev => [...prev, task]);
      setTask('');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title title="Jacek Kublik" subtitle="10lvl wannabe" />
          <Card.Content>
            <Text>Masz {tasks.length} zadań na dziś</Text>
          </Card.Content>
        </Card>

        <TextInput
          label="Nowe zadanie"
          value={task}
          onChangeText={setTask}
          mode="outlined"
          style={styles.input}
        />
        <Button mode="contained" onPress={addTask} style={styles.button}>
          Dodaj zadanie
        </Button>

        <Title style={styles.title}>Lista zadań</Title>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Card style={styles.taskCard}>
              <Card.Content>
                <Text>{index + 1}. {item}</Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
  },
  button: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  taskCard: {
    marginBottom: 8,
  },
});