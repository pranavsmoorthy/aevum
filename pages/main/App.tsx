import { StatusBar } from 'expo-status-bar';
import NetInfo from '@react-native-community/netinfo';
import React, { use, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Keyboard
} from 'react-native';
import PagerView from 'react-native-pager-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as NavigationBar from 'expo-navigation-bar';

import { styleJSON } from './style.js';
import assistantPage from '../assistantPage';
import memoryPage from '../memoryPage';
import addMemoryPage from '../addMemoryPage';

import "../../global.css"

const styles = StyleSheet.create(styleJSON());

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        console.log("netinfo", NetInfo.fetch())
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
        <View style={{ flex: 1 }}>
            <PagerView
                style={{ 
                    height: '100%', 
                    width: '100%', 
                 }}
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
