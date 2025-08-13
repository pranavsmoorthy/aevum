import React, { use, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import getGemmaSimulatedResponse from '../../src/assistant/getResponse.js';
import { getAllMemories } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import InputBar from '../../components/InputBar/index';

const styles = StyleSheet.create(styleJSON());

const key = process.env.EXPO_PUBLIC_API_KEY;

export default function assistantPage() {
  const [inputEdited, setInputEdited] = useState(false);
  const [response, setResponse] = useState("");

  const handleInputChange = async(prompt) => {
    setResponse("");

    let memories = await getAllMemories();
    let editedMemories = [];

    memories.map((memory) => {
      editedMemories.push(memory.description + " This happened on " + memory.year);
    })

    setInputEdited(true);
    setResponse(await getGemmaSimulatedResponse(prompt, editedMemories, key));
  }

  return (
    <View style={styles.container}>
        {
          inputEdited ? 
          (
            <View style={styles.responseContainer}>
              <Text style={styles.responseHeader}>Response</Text>
              <Text style={styles.responseText}>
                {response}
              </Text>
            </View>
          ) 
          : 
          (<Text style={styles.title}>aevum.</Text>)
        }
        <KeyboardAvoidingView style={{width: '100%', height: '100%', bottom: '40'}} behavior="padding">
          <InputBar onSubmit={handleInputChange} />
        </KeyboardAvoidingView>
    </View>
  );
}
