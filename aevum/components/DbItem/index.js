import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SettingsSwitch from '../SettingsSwitch/index';

import { styleJSON } from './style';

class DbItem extends Component {
    render() {
        return (
            // Container View for the rounded box, styled with StyleSheet
            <View style={styles.roundedBoxContainer}>
                {/* Text content of the rounded box */}
                <TouchableOpacity>
                    <Text style={styles.boxText}>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>

                {/* Container for the year and the close button, to align them horizontally */}
                <View style={styles.bottomRow}>
                    {/* Year section inside the box, below the text */}
                    {this.props.year && ( // Only render if year prop is provided
                        <View style={styles.yearContainer}>
                            <Text style={styles.yearText}> {this.props.year} </Text>
                        </View>
                    )}

                    {/* Close button positioned inside the box, aligned with the year */}
                    <TouchableOpacity
                        onPress={console.log("Closed")}
                        style={styles.closeButton}
                        accessibilityLabel="Close"
                    >
                        {/* Using a simple Text 'X' for the icon, as lucide-react is web-specific */}
                        <Text style={styles.closeIcon}>×</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(styleJSON());

export default DbItem