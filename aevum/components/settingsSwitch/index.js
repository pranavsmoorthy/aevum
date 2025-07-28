import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native'; // Import necessary React Native components

import { styleJSON } from './styles';
import { assets } from '../../assets/assets';

const styles = StyleSheet.create(styleJSON());

class SettingsSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: this.props.startVal || false,
        }
    }

    handleToggle = () => {
        this.setState({ isSwitchOn: !this.state.isSwitchOn });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>{this.props.label}</Text>
                    <Switch
                        trackColor={{ false: assets.basic.lightGray, true: assets.basic.blue }} // Tailwind's gray-300 and blue-600
                        thumbColor={"#FFFFFF"} // Tailwind's white
                        onValueChange={this.handleToggle}
                        value={this.state.isSwitchOn}
                    />
                </View>
            </View>
        );
    }
}

export default SettingsSwitch