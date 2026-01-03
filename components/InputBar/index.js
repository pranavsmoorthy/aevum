import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Send } from 'lucide-react-native'; 

import { styleJSON } from './style';
import { assets } from '../../assets/assets';

const styles = StyleSheet.create(styleJSON());

const InputBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onSubmit(inputValue);
            setInputValue('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ask about a memory..."
                    placeholderTextColor="#9ca3af"
                    value={inputValue}
                    onChangeText={setInputValue}
                    onSubmitEditing={handleSubmit} // Allows submitting with keyboard return key
                    returnKeyType="send"
                    blurOnSubmit={false}
                    cursorColor={assets.basic.main}
                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={handleSubmit}
                    activeOpacity={0.7}
                >
                    <Send size={16} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InputBar;