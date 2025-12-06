import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { getAllMemories, createMemory } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import DbItem from '../../components/DbItem/index.js';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

const styles = StyleSheet.create(styleJSON());

export default function memoryPage({ refreshTrigger }) {
  const [memories, setMemories] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter memories based on search query
  const filteredMemories = React.useMemo(() => {
    return memories.filter(memory => {
      const searchLower = searchQuery.toLowerCase();
      return (
        memory.description.toLowerCase().includes(searchLower) ||
        memory.year.toString().includes(searchQuery)
      );
    });
  }, [memories, searchQuery]);

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
          memories.length >= 5 ? 
          (<View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search memories..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setSearchQuery('')}
              >
                <Text style={styles.clearButtonText}>×</Text>
              </TouchableOpacity>
            )}
          </View>) : null
        }

        {/* Use filteredMemories instead of memories */}
        {filteredMemories.length === 0 && memories.length > 0 ? (
          <Text style={styles.noMemoryText}>
            No memories found matching your search.
          </Text>
        ) : memories.length === 0 ? (
          <Text style={styles.noMemoryText}>
            Start capturing your precious moments by swiping right and adding your first memory.
            {'\n'} {'\n'}
            Each memory you add becomes part of your personal timeline.
            {'\n'} {'\n'}
            The more memories you add, the richer your timeline becomes, and the better our assistant can help you.
          </Text>
        ) : (
          [...filteredMemories].reverse().map((memory, index) => (
            <DbItem
              key={index}
              text={memory.description}
              year={memory.year}
              id={memory.id}
              onRefresh={async () => {
                const fetchedMemories = await getAllMemories();
                setMemories(fetchedMemories);
              }}
              onPress={() => console.log(`Memory ${index + 1} pressed`)}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}
