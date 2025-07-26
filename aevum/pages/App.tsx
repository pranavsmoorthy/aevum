import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput
} from 'react-native';

import SwipeUpSettingsMenuClass from '../components/swipeUpSettingsMenu/index';

import {
  createMemory,
  getAllMemories,
  getMemoryById,
  updateMemory,
  deleteMemory,
} from '../src/db/dbController';

import "../global.css"

export default function App() {
  return (
    <View style={styles.container}>
      <SwipeUpSettingsMenuClass />
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
