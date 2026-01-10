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
import { getAllMemories } from '../../src/db/dbController';

import AssistantPage from '../assistantPage';
import MemoryPage from '../memoryPage';
import SettingsPage from '../settingsPage';
import AddMemoryModal from '../../components/AddMemoryModal';
import NavBar from '../../components/NavBar';
import { assets } from '../../assets/assets';
import { styleJSON } from './style.js';

import "../../global.css"
import GradientText from '../../components/GradientText';

const appStyles = StyleSheet.create(styleJSON());

export default function App() {
    const [activeTab, setActiveTab] = useState('chat'); // 'memories', 'chat', or 'settings'
    const [showAddModal, setShowAddModal] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [memoriesCount, setMemoriesCount] = useState(0);

    const fetchMemoriesCount = async () => {
        const memories = await getAllMemories();
        setMemoriesCount(memories.length);
    }

    useEffect(() => {
        if (Platform.OS === 'android') {
            NavigationBar.setBackgroundColorAsync('transparent');
            NavigationBar.setButtonStyleAsync('dark');
        }
        fetchMemoriesCount();
    }, []);

    useEffect(() => {
        fetchMemoriesCount();
    }, [refreshTrigger]);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === 'memories') {
            setRefreshTrigger(prev => prev + 1);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: assets.basic.mediumGray }}>
            <View style={appStyles.header}>
                <View>
                    <GradientText style={appStyles.headerTitle}>
                        {activeTab === 'memories' ? 'Timeline' : activeTab === 'chat' ? 'aevum' : 'Settings'}
                    </GradientText>
                    <Text style={appStyles.headerSubtitle}>
                        {activeTab === 'memories' ? memoriesCount + ` memories stored` : activeTab === 'chat' ? 'Ask about your past' : 'Manage your preferences'}
                    </Text>
                </View>
                {activeTab === 'memories' && (
                    <TouchableOpacity
                        onPress={() => setShowAddModal(true)}
                        style={appStyles.addButton}
                    >
                        <Plus size={20} color={assets.basic.main} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={{ flex: 1 }}>
                {activeTab === 'chat' && <AssistantPage />}
                {activeTab === 'memories' && <MemoryPage refreshTrigger={refreshTrigger} />}
                {activeTab === 'settings' && <SettingsPage onMemoriesCleared={() => setRefreshTrigger(prev => prev + 1)} />}
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


