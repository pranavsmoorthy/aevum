import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { getAllMemories, createMemory } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import DbItem from '../../components/DbItem/index.js';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

const styles = StyleSheet.create(styleJSON());

export default function memoryPage({ refreshTrigger }) {
  const [memories, setMemories] = React.useState([]);
  console.log("Mem:", memories)

  React.useEffect(() => {
    const fetchMemories = async () => {
      const fetchedMemories = await getAllMemories();
      setMemories(fetchedMemories);
    };
    fetchMemories();
  }, [refreshTrigger]); // Re-run when refreshTrigger changes

  const handleAddMemory = async () => {
    await createMemory("New Memory", 2023);
    const updatedMemories = await getAllMemories();
    setMemories(updatedMemories);
    console.log("Memory added");
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 20,
        }}>
          <Text style={styles.title}>Memories</Text>
        </View>
        {
          memories.length === 0 ? (
            null
          ) : (
          <Text style={styles.noMemoryText}>
            Tap on a memory to view or edit its details.
          </Text>
        )}
        {
          memories.length === 0 ? (
            <Text style={
              styles.noMemoryText}>
              Start capturing your precious moments by swiping right and adding your first memory.
              {'\n'} {'\n'}
              Each memory you add becomes part of your personal timeline.
              {'\n'} {'\n'}
              The more memories you add, the richer your timeline becomes, and the better our assistant can help you.
            </Text>
          ) : (
          [...memories].reverse().map((memory, index) => (
            <DbItem
              key={index}
              text={memory.description}
              year={memory.year}
              id={memory.id}
              onRefresh={async () => {
                const fetchedMemories = await getAllMemories();
                setMemories(fetchedMemories);
              }} // Add this line
              onPress={() => console.log(`Memory ${index + 1} pressed`)}
            />
          )))
        }
      </View>
    </ScrollView>
  );
}
