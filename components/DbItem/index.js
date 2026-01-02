import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { deleteMemory } from '../../src/db/dbController';
import { styleJSON } from './style';
import { Calendar, Trash2 } from 'lucide-react-native';
import { assets } from '../../assets/assets';

const DbItem = ({ id, text, year, onRefresh }) => {
    // Logic to split description into title and content
    const lines = text.split('\n');
    const title = lines[0];
    const content = lines.length > 1 ? lines.slice(1).join('\n') : '';

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.dateContainer}>
                    <Calendar size={14} color={assets.basic.blue} />
                    <Text style={styles.dateText}>{year}</Text>
                </View>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            await deleteMemory(id);
                            if (onRefresh) {
                                onRefresh();
                            }
                        } catch (error) {
                            console.error('Error deleting memory:', error);
                        }
                    }}
                    style={styles.deleteButton}
                >
                    <Trash2 size={16} color="#ef4444" />
                </TouchableOpacity>
            </View>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {content ? <Text style={styles.content}>{content}</Text> : <Text style={styles.content}>{title}</Text>}
        </View>
    );
};

const styles = StyleSheet.create(styleJSON());

export default DbItem;