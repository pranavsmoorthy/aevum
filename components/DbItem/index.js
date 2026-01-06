import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { deleteMemory } from '../../src/db/dbController';
import { styleJSON } from './style';
import { Calendar, Trash2 } from 'lucide-react-native';
import { assets } from '../../assets/assets';

const DbItem = ({ id, title, text, year, date, image_uri, onRefresh }) => {
    const displayDate = date ? new Date(date).toLocaleDateString() : year;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <View style={styles.dateContainer}>
                    <Calendar size={14} color={assets.basic.main} />
                    <Text style={styles.dateText}>{displayDate}</Text>
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
            <Text style={styles.content}>{text}</Text>
            {image_uri && (
                <Image
                    source={{ uri: image_uri }}
                    style={{ width: 200, height: 200, borderRadius: 10, marginTop: 10 }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create(styleJSON());

export default DbItem;