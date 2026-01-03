import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { styleJSON } from './style';
import { deleteAllChatMessages, deleteAllMemories } from '../../src/db/dbController';

const styles = StyleSheet.create(styleJSON());

export default function SettingsPage({ onMemoriesCleared }) {

    const handleClearChat = () => {
        Alert.alert(
            "Clear Chat History",
            "Are you sure you want to delete all chat messages? This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        await deleteAllChatMessages();
                        Alert.alert("Chat history cleared!");
                    },
                    style: "destructive"
                }
            ]
        );
    };

    const handleClearMemories = () => {
        Alert.alert(
            "Clear All Memories",
            "Are you sure you want to delete all your memories? This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        await deleteAllMemories();
                        if (onMemoriesCleared) {
                            onMemoriesCleared();
                        }
                        Alert.alert("All memories cleared!");
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <TouchableOpacity style={styles.button} onPress={handleClearChat}>
                <Text style={styles.buttonText}>Clear Chat History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleClearMemories}>
                <Text style={styles.buttonText}>Clear All Memories</Text>
            </TouchableOpacity>
        </View>
    );
}
