import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Brain, Clock, Settings } from 'lucide-react-native';
import { assets } from '../../assets/assets';
import { styleJSON } from './style.js';

const styles = StyleSheet.create(styleJSON());

const NavBar = ({ activeTab, onTabChange }) => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity
                onPress={() => onTabChange('memories')}
                style={styles.navButton}
            >
                <Clock size={20} color={activeTab === 'memories' ? assets.basic.main : assets.basic.darkGray} />
                <Text style={[styles.navText, { color: activeTab === 'memories' ? assets.basic.main : assets.basic.darkGray }]}>
                    memories
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabChange('chat')}
                style={styles.navButton}
            >
                <Brain size={20} color={activeTab === 'chat' ? assets.basic.main : assets.basic.darkGray} />
                <Text style={[styles.navText, { color: activeTab === 'chat' ? assets.basic.main : assets.basic.darkGray }]}>
                    aevum
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabChange('chat')}
                style={styles.navButton}
            >
                <Settings size={20} color={activeTab === 'settings' ? assets.basic.main : assets.basic.darkGray} />
                <Text style={[styles.navText, { color: activeTab === 'settings' ? assets.basic.main : assets.basic.darkGray }]}>
                    settings
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default NavBar;
