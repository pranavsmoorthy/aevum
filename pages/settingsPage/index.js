import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
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
        <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
            <View style={styles.settingsCard}>
                <Text style={styles.aboutHeader}>About Aevum</Text>
                <Text style={styles.aboutParagraph}>
                    Aevum is your personal memory assistant. It helps you create, view, and manage your memories, and interact with an AI assistant to recall important details.
                </Text>
            </View>
            
            <View style={styles.settingsCard}>
                <Text style={styles.aboutHeader}>How To Use</Text>
                <Text style={styles.aboutParagraph}>
                    Aevum helps you capture and relive your experiences.
                </Text>
                <Text style={styles.aboutParagraph}>
                    To add a new memory: Swipe to the "Add Memory" tab, fill in the details, and optionally add an image.
                </Text>
                <Text style={styles.aboutParagraph}>
                    To view your memories: Swipe to the "Memories" tab. You can search through them using keywords or dates.
                </Text>
                <Text style={styles.aboutParagraph}>
                    To interact with the AI assistant: Swipe to the "Assistant" tab. Ask questions about your memories, and the AI will provide relevant details and associated images if available.
                </Text>
                <Text style={styles.aboutParagraph}>
                    To manage app data: Use the options below to clear your chat history or delete all recorded memories.
                </Text>
            </View>

            <View style={styles.settingsCard}>
                <Text style={styles.aboutHeader}>Stored Info</Text>
                
                <TouchableOpacity style={styles.button} onPress={handleClearChat}>
                    <Text style={styles.buttonText}>Clear Chat History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleClearMemories}>
                    <Text style={styles.buttonText}>Clear All Memories</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
