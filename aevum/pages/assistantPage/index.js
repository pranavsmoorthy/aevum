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


import { styleJSON } from './style.js';

import InputBar from '../../components/InputBar/index';

const styles = StyleSheet.create(styleJSON());

export default function assistantPage() {
  return (
    <View style={styles.container} key='0'>
        <Text style={styles.title}>aevum.</Text>
        <InputBar />
    </View>
  );
}
