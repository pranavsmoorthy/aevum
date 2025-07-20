import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import database, { memoryCollection } from './db';

const onRead = async () => {
  const memories = await memoryCollection.query().fetch();

  await database.write(async () => {
    await memoryCollection.create(memory => {
      memory.description = 'Test';
      memory.year = 2023;
    });
  });

  console.log(memories);
}

export default function App() {
  return (
    <Button title='Test' onPress={onRead} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
