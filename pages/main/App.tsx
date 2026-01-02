import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import { Plus } from 'lucide-react-native';
import * as NavigationBar from 'expo-navigation-bar';

import AssistantPage from '../assistantPage';
import MemoryPage from '../memoryPage';
import AddMemoryModal from '../../components/AddMemoryModal';
import NavBar from '../../components/NavBar';
import { assets } from '../../assets/assets';
import { styleJSON } from './style.js';

import "../../global.css"

const appStyles = StyleSheet.create(styleJSON());

export default function App() {
    const [activeTab, setActiveTab] = useState('chat'); // 'memories' or 'chat'
    const [showAddModal, setShowAddModal] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        if (Platform.OS === 'android') {
            NavigationBar.setBackgroundColorAsync('#ffffff');
            NavigationBar.setButtonStyleAsync('dark');
        }
    }, []);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'memories') {
            setRefreshTrigger(prev => prev + 1);
        }
    }

    const memories = 0;

    return (
        <View style={{ flex: 1, backgroundColor: assets.basic.mediumGray }}>
            <View style={appStyles.header}>
                <View>
                    <Text style={appStyles.headerTitle}>
                        {activeTab === 'memories' ? 'Timeline' : 'aevum AI'}
                    </Text>
                    <Text style={appStyles.headerSubtitle}>
                        {activeTab === 'memories' ? memories + ` memories stored` : 'Ask about your past'}
                    </Text>
                </View>
                {activeTab === 'memories' && (
                    <TouchableOpacity
                        onPress={() => setShowAddModal(true)}
                        style={appStyles.addButton}
                    >
                        <Plus size={20} color={assets.basic.blue} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={{ flex: 1 }}>
                {activeTab === 'chat' && <AssistantPage />}
                {activeTab === 'memories' && <MemoryPage refreshTrigger={refreshTrigger} />}
            </View>

            <NavBar activeTab={activeTab} onTabChange={handleTabChange} />

            {showAddModal && <AddMemoryModal 
                onClose={() => setShowAddModal(false)}
                onAdd={() => {
                    setRefreshTrigger(prev => prev + 1);
                }}
            />}
        </View>
    );
}


