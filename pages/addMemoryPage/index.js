import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { getAllMemories, createMemory } from '../../src/db/dbController';

import { styleJSON } from './style.js';

import DbItem from '../../components/DbItem/index.js';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';

import { assets } from '../../assets/assets';

const { SyncRedactor } = require("redact-pii-light");
const redactor = new SyncRedactor({
    globalReplaceWith: "•"
})

const styles = StyleSheet.create(styleJSON());

export default function addMemoryPage() {
  const [description, setDescription] = React.useState('');
  const [year, setYear] = React.useState('');
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showEmptyFailure, setShowEmptyFailure] = React.useState(false);
  const [showDateFailure, setShowDateFailure] = React.useState(false);
  const [showPIIFailure, setShowPIIFailure] = React.useState(false);

  const handleAddMemory = async () => {
    try {
      let descriptionRedact;

      if (!description || !year) {
        setShowEmptyFailure(true);
        setTimeout(() => {
          setShowEmptyFailure(false);
        }, 3000);
        return;
      }

      // Convert year to number and validate
      const yearNum = parseInt(year);
      const date = new Date().getFullYear();

      if (isNaN(yearNum) || yearNum < 1900 || yearNum > date) {
        setShowDateFailure(true);
        setTimeout(() => {
          setShowDateFailure(false);
        }, 3000);
        return;
      }


      descriptionRedact = description;
            console.log(descriptionRedact)

      descriptionRedact = redactor.redact(descriptionRedact);

      console.log(descriptionRedact)

      if(descriptionRedact.includes("•")) {
        setShowPIIFailure(true);
        setTimeout(() => {
          setShowPIIFailure(false);
        }, 3000);
        return;
      }

      await createMemory(description, yearNum);
      // Clear inputs after successful addition
      setDescription('');
      setYear('');

      // Show success message and hide it after 3 seconds
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error("Error adding memory:", error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={{
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingRight: 20,
        }}>
          <Text style={styles.title}>Add Memory</Text>

          <TextInput
            style={styles.textInputDescription}
            placeholder="Memory Description"
            placeholderTextColor={assets.basic.lightGray}
            multiline
            scrollEnabled={true}
            value={description}
            onChangeText={setDescription}
            accessibilityLabel="Memory description input"
            cursorColor={assets.basic.blue}
          />

          <TextInput
            style={styles.textInputTitle}
            placeholder="Memory Year"
            placeholderTextColor={assets.basic.lightGray}
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
            accessibilityLabel="Memory year input"
            cursorColor={assets.basic.blue}
          />

          <TouchableOpacity
            onPress={handleAddMemory}
            style={styles.closeIcon}
            accessibilityLabel="Add memory"
          >
            <View style={styles.addContainer}>
              <Text style={styles.addIcon}>Add Memory</Text>
            </View>
          </TouchableOpacity>

          {showSuccess && (
            <View style={styles.message}>
              <Text style={styles.successText}>Memory Added</Text>
            </View>
          )}
          {showDateFailure && (
            <View style={styles.message}>
              <Text style={styles.failureText}>Please enter a valid date</Text>
            </View>
          )}
          {showEmptyFailure && (
            <View style={styles.message}>
              <Text style={styles.failureText}>Please fill both fields</Text>
            </View>
          )}
          {showPIIFailure && (
            <View style={styles.message}>
              <Text style={styles.failureText}>This memory might have personally identifiable information!</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
