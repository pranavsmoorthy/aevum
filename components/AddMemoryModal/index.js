import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { X } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createMemory } from '../../src/db/dbController';
import { assets } from '../../assets/assets';
import { styleJSON } from './style.js';

const { SyncRedactor } = require("redact-pii-light");
const redactor = new SyncRedactor({
    globalReplaceWith: "•"
});

const styles = StyleSheet.create(styleJSON());

const AddMemoryModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [error, setError] = useState('');

  const handleAddMemory = async () => {
    if (!description.trim()) {
      setError('Please fill out the description.');
      return;
    }

    let descriptionRedact = redactor.redact(description);
    if (descriptionRedact.includes("•")) {
        setError('This memory might have personally identifiable information!');
        return;
    }

    try {
      await createMemory(description, date.getTime(), title);
      onAdd();
      onClose();
    } catch (e) {
      setError('Failed to save memory.');
      console.error(e);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
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
          <Text style={styles.label}>Title (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Summer Vacation"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="What happened?"
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />

          <Text style={styles.label}>Date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text style={{color: "black"}}>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          )}

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
