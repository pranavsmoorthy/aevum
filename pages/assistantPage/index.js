import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Brain } from 'lucide-react-native';

import getGemmaSimulatedResponse from '../../src/assistant/getResponse.js';
import { getAllMemories, getAllChatMessages, createChatMessage } from '../../src/db/dbController';
import { styleJSON } from './style.js';
import InputBar from '../../components/InputBar/index';
import { assets } from '../../assets/assets.js';

const styles = StyleSheet.create(styleJSON());
const key = process.env.EXPO_PUBLIC_API_KEY;

export default function AssistantPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const loadMessages = async () => {
      const dbMessages = await getAllChatMessages();
      if (dbMessages.length === 0) {
        const initialMessage = { id: 1, sender: 'ai', text: 'Hello! I am your Memory Assistant. Ask me anything about your past experiences.' };
        setMessages([initialMessage]);
        await createChatMessage('ai', initialMessage.text);
      } else {
        setMessages(dbMessages.map(m => ({ id: m.id, sender: m.sender, text: m.text })));
      }
    };
    loadMessages();
  }, []);

  const handleSendMessage = async (prompt) => {
    if (!prompt.trim() || loading) return;

    await createChatMessage('user', prompt);
    const userMsg = { id: Date.now(), sender: 'user', text: prompt };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    const memories = await getAllMemories();
    const editedMemories = memories.map(m => `${m.description} This happened on ${m.year}`);
    
    const gemmaResponse = await getGemmaSimulatedResponse(prompt, editedMemories, key);
    
    await createChatMessage('ai', gemmaResponse);
    const aiMsg = { id: Date.now() + 1, sender: 'ai', text: '' };
    setMessages(prev => [...prev, aiMsg]);

    for (let char of gemmaResponse) {
        setMessages(prev => prev.map(msg => 
            msg.id === aiMsg.id ? { ...msg, text: msg.text + char } : msg
        ));
        await delay(5);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: assets.basic.mediumGray }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.container}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.sender === 'user' ? styles.userMessageContainer : styles.aiMessageContainer
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'user' ? styles.userMessageBubble : styles.aiMessageBubble
              ]}
            >
              {msg.sender === 'ai' && (
                <View style={styles.aiMessageHeader}>
                  <Brain size={12} color={assets.basic.blue} />
                  <Text style={styles.aiHeaderText}>AI Assistant</Text>
                </View>
              )}
              <Text style={msg.sender === 'user' ? styles.userMessageText : styles.aiMessageText}>
                {msg.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <InputBar onSubmit={handleSendMessage} />
    </KeyboardAvoidingView>
  );
}
