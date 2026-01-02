import React, { useMemo, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { Clock } from 'lucide-react-native';

import { getAllMemories } from '../../src/db/dbController';
import { styleJSON } from './style.js';
import DbItem from '../../components/DbItem/index.js';
import { assets } from '../../assets/assets';

const styles = StyleSheet.create(styleJSON());

export default function MemoryPage({ refreshTrigger }) {
  const [memories, setMemories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMemories = useMemo(() => {
    if (!searchQuery) return memories;
    return memories.filter(memory => {
      const searchLower = searchQuery.toLowerCase();
      return (
        memory.description.toLowerCase().includes(searchLower) ||
        memory.year.toString().includes(searchQuery)
      );
    });
  }, [memories, searchQuery]);

  useEffect(() => {
    const fetchMemories = async () => {
      const fetchedMemories = await getAllMemories();
      setMemories(fetchedMemories);
    };
    fetchMemories();
  }, [refreshTrigger]);

  const fetchMemories = async () => {
    const fetchedMemories = await getAllMemories();
    setMemories(fetchedMemories);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {memories.length > 0 && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search memories..."
              placeholderTextColor="#9ca3af"
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
          </View>
        )}

        {filteredMemories.length === 0 ? (
          <View style={styles.noMemoryContainer}>
            <Clock size={48} color="#d1d5db" />
            <Text style={styles.noMemoryText}>
              {memories.length > 0
                ? "No memories found matching your search."
                : "No memories recorded yet."}
            </Text>
          </View>
        ) : (
          [...filteredMemories].reverse().map((memory) => (
            <DbItem
              key={memory.id}
              text={memory.description}
              year={memory.year}
              id={memory.id}
              onRefresh={fetchMemories}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}
