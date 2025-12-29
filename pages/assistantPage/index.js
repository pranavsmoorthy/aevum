import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import getGemmaSimulatedResponse from '../../src/assistant/getResponse.js';
import { getAllMemories } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import InputBar from '../../components/InputBar/index';

const styles = StyleSheet.create(styleJSON());

const key = process.env.EXPO_PUBLIC_API_KEY;

export default function assistantPage() {
  const [inputEdited, setInputEdited] = useState(false);
  const [response, setResponse] = useState("");
  const [responseLoading, setResponseLoading] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleInputChange = async(prompt) => {
    console.log("handleInputChange called with prompt:", prompt);
    console.log(prompt.length)
    if(prompt.length == 0) return;
    if(responseLoading) return; // Prevent multiple submissions while loading

    setResponse("Loading...");
    setResponseLoading(true);
    fadeAnim.setValue(0); // Reset opacity to 0 for new input
    console.log(fadeAnim)

    let memories = await getAllMemories();
    let editedMemories = [];

    memories.map((memory) => {
      editedMemories.push(memory.description + " This happened on " + memory.year);
    })

    setInputEdited(true);
    let gemmaResponse = await getGemmaSimulatedResponse(prompt, editedMemories, key);
    console.log("Gemma response:", gemmaResponse);

    setResponse(""); // Clear "Loading..." message
    for(let char of gemmaResponse) {
      setResponse(prev => prev + char);
      await delay(15)
    }

    setResponseLoading(false);
  }

  useEffect(() => {
    // Fade in effect when the component mounts
    console.log("animated")
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
            (
              <Animated.View style={{ opacity: fadeAnim, width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 50 }}>
                <Image source={require('../../assets/images/icon-transparent.png')} style={{ width: 150, height: 150, marginTop: 130, marginBottom: 1 }} />
                <Text style={styles.title}>aevum.</Text>
              </Animated.View>
            )
        }
        <InputBar onSubmit={handleInputChange} />
      </KeyboardAwareScrollView>
  );
}

