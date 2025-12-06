import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';

import { deleteMemory, updateMemory } from '../../src/db/dbController';
import { styleJSON } from './style';

class DbItem extends Component {
    state = {
        isFocused: false,
        description: this.props.text || '',
        year: this.props.year || '',
        yearError: false,
    };

    render() {
        return (
            // Container View for the rounded box, styled with StyleSheet
            <View style={[
                styles.roundedBoxContainer,
                this.state.isFocused && styles.roundedBoxContainerFocused
            ]}>
                {/* Text content of the rounded box */}
                <TextInput
                    style={styles.boxText}
                    multiline={true}
                    onFocus={() => this.setState({ isFocused: true })}
                    onBlur={async() => {
                        this.setState({ isFocused: false })
                        await updateMemory(this.props.id, {
                            description: this.state.description,
                        });
                        if (this.props.onRefresh) {
                            this.props.onRefresh();
                        }
                    }}
                    onChangeText={(text) => {
                        this.setState({ description: text });
                        console.log(text)
                    }}
                >
                    {this.props.text}
                </TextInput>

                {/* Container for the year and the close button, to align them horizontally */}
                <View style={styles.bottomRow}>
                    {/* Year section inside the box, below the text */}
                    {this.props.year && ( // Only render if year prop is provided
                        <View style={styles.yearContainer}>
                            <TextInput 
                                style={styles.yearText}
                                onFocus={() => this.setState({ isFocused: true })}
                                onBlur={async() => {
                                    this.setState({ isFocused: false })

                                    const yearNum = parseInt(this.state.year);
                                    const date = new Date().getFullYear();

                                    if (isNaN(yearNum) || yearNum < 1900 || yearNum > date) {
                                        this.setState({ yearError: true });
                                        return;
                                    }

                                    await updateMemory(this.props.id, {
                                        year: this.state.year,
                                    });
                                    if (this.props.onRefresh) {
                                        this.props.onRefresh();
                                    }
                                }}
                                onChangeText={(text) => {
                                    this.setState({ year: +text });
                                    console.log(text)
                                }}
                                keyboardType="numeric"
                            > 
                                {this.props.year} 
                            </TextInput>
                        </View>
                    )}

                    {/* Close button positioned inside the box, aligned with the year */}
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                await deleteMemory(this.props.id);
                                if (this.props.onRefresh) {
                                    this.props.onRefresh();
                                }
                            } catch (error) {
                                console.error('Error deleting memory:', error);
                            }
                        }}
                        style={styles.closeButton}
                        accessibilityLabel="Close"
                    >
                        {/* Using a simple Text 'X' for the icon, as lucide-react is web-specific */}
                        <Text style={styles.closeIcon}>×</Text>
                    </TouchableOpacity>
                </View>
                {this.state.yearError ?
                    (<Text style={styles.errorText}>Please enter a valid year</Text>)
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ...styleJSON()
});

export default DbItem;