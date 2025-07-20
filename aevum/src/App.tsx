import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';

import {
  createMemory,
  getAllMemories,
  getMemoryById,
  updateMemory,
  deleteMemory,
} from './db/dbController';

export default function App() {
  const [memories, setMemories] = useState<any[]>([]);
  const [desc, setDesc] = useState('');
  const [year, setYear] = useState('');

  const refresh = async () => {
    const all = await getAllMemories();
    setMemories(all);
  };

  const handleCreate = async () => {
    if (!desc) return;
    await createMemory(desc, year ? Number(year) : null);
    setDesc('');
    setYear('');
    refresh();
  };

  const handleUpdateFirst = async () => {
    if (memories.length === 0) return;
    await updateMemory(memories[0].id, { description: memories[0].description + ' (updated)' });
    refresh();
  };

  const handleDeleteFirst = async () => {
    if (memories.length === 0) return;
    await deleteMemory(memories[0].id);
    refresh();
  };

  React.useEffect(() => {
    refresh();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Memories</Text>
      <FlatList
        data={memories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.description} {item.year ? `(${item.year})` : ''}</Text>
        )}
        style={{ width: '100%', marginVertical: 10, maxHeight: 200 }}
      />
      <TextInput
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
        style={{ borderWidth: 1, width: 200, marginBottom: 5, padding: 5 }}
      />
      <TextInput
        placeholder="Year (optional)"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
        style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 5 }}
      />
      <Button title="Create Memory" onPress={handleCreate} />
      <View style={{ height: 10 }} />
      <Button title="Update First Memory" onPress={handleUpdateFirst} />
      <View style={{ height: 10 }} />
      <Button title="Delete First Memory" onPress={handleDeleteFirst} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
