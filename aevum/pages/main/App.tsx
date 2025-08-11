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

import SwipeUpSettingsMenuClass from '../../components/SwipeUpSettingsMenu/index';
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

import "../../global.css"

const styles = StyleSheet.create(styleJSON());

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#333333');
    }, [])
    return (
        <View>
            <PagerView style={{ height: '100%', width: '100%' }} initialPage={0}>
                <View key='0'> {assistantPage()} </View>
                <View key='1'> {memoryPage()} </View>
                <View key='2'> Add page </View>
            </PagerView>
                <SwipeUpSettingsMenuClass />
        </View>
    );
}
