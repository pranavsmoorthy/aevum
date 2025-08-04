import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { getAllMemories } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import DbItem from '../../components/DbItem/index.js';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

const styles = StyleSheet.create(styleJSON());

export default function memoryPage() {
  const [memories, setMemories] = React.useState([]);
  console.log("Mem:", memories)
  
  React.useEffect(() => {
      const fetchMemories = async () => {
          const fetchedMemories = await getAllMemories();
          setMemories(fetchedMemories);
      };
      fetchMemories();
  }, []);

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
          <TouchableOpacity
              onPress={console.log("Closed")}
              style={styles.closeIcon}
              accessibilityLabel="Add"
          >
            <View style={styles.addContainer}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        {memories.map((memory, index) => (
          <DbItem
            key={index}
            text={memory.description}
            year={memory.year}
            onPress={() => console.log(`Memory ${index + 1} pressed`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
