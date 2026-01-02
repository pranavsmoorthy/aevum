import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import { X } from 'lucide-react-native';
import { createMemory } from '../../src/db/dbController';
import { assets } from '../../assets/assets';
import { styleJSON } from './style.js';

const { SyncRedactor } = require("redact-pii-light");
const redactor = new SyncRedactor({
    globalReplaceWith: "•"
});

const styles = StyleSheet.create(styleJSON());

const AddMemoryModal = ({ onClose, onAdd }) => {
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState('');

  const handleAddMemory = async () => {
    if (!description.trim() || !year.trim()) {
      setError('Please fill out all fields.');
      return;
    }
    
    const yearNum = parseInt(year);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
      setError('Please enter a valid year.');
      return;
    }

    let descriptionRedact = redactor.redact(description);
    if (descriptionRedact.includes("•")) {
        setError('This memory might have personally identifiable information!');
        return;
    }

    try {
      await createMemory(description, yearNum);
      onAdd();
      onClose();
    } catch (e) {
      setError('Failed to save memory.');
      console.error(e);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>New Memory</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="What happened?"
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />

          <Text style={styles.label}>Year</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 2023"
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TouchableOpacity style={styles.saveButton} onPress={handleAddMemory}>
            <Text style={styles.saveButtonText}>Save Memory</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default AddMemoryModal;
