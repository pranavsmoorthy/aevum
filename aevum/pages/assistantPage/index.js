import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';


import { styleJSON } from './style.js';

import InputBar from '../../components/InputBar/index';

const styles = StyleSheet.create(styleJSON());

export default function assistantPage() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>aevum.</Text>
        <KeyboardAvoidingView style={{width: '100%', height: '100%', bottom: '50'}} behavior="padding">
          <InputBar />
        </KeyboardAvoidingView>
    </View>
  );
}
