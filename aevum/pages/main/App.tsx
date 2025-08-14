import { StatusBar } from 'expo-status-bar';
import React, { use, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TextInput,
} from 'react-native';
import PagerView from 'react-native-pager-view';

import * as NavigationBar from 'expo-navigation-bar';

import {
    createMemory,
    getAllMemories,
    getMemoryById,
    updateMemory,
    deleteMemory,
} from '../../src/db/dbController';

import { styleJSON } from './style.js';
import assistantPage from '../assistantPage';
import memoryPage from '../memoryPage';
import addMemoryPage from '../addMemoryPage';

import "../../global.css"

const styles = StyleSheet.create(styleJSON());

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#333333');
    }, []);

    const handlePageSelected = (e: any) => {
        const newPage = e.nativeEvent.position;
        setCurrentPage(newPage);

        if (newPage === 1) {
            setRefreshTrigger(prev => prev + 1);
        }
    };

    return (
        <View>
            <PagerView
                style={{ height: '100%', width: '100%' }}
                initialPage={0}
                onPageSelected={handlePageSelected}
            >
                <View key='0'> {assistantPage()} </View>
                <View key='1'> {memoryPage({ refreshTrigger })} </View>
                <View key='2'> {addMemoryPage()} </View>
            </PagerView>
        </View>
    );
}
