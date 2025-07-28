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

import SwipeUpSettingsMenuClass from '../../components/swipeUpSettingsMenu/index';
import InputBar from '../../components/InputBar/index';

import {
  createMemory,
  getAllMemories,
  getMemoryById,
  updateMemory,
  deleteMemory,
} from '../../src/db/dbController';

import { styleJSON } from './style.js';

import "../../global.css"

const styles = StyleSheet.create(styleJSON());

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aevum.</Text>
      <InputBar />
      <SwipeUpSettingsMenuClass />
    </View>
  );
}
