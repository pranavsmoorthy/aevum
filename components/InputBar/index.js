import React, { Component } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Keyboard
} from 'react-native';
import Svg, { Path } from 'react-native-svg'; 
import { StatusBar } from 'react-native';

import { styleJSON } from './style';
import { assets } from '../../assets/assets';

const styles = StyleSheet.create(styleJSON());

class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isKeyboardVisible: false,
            keyboardHeight: 0
        }
    }
    
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => this.setState({ isKeyboardVisible: true, keyboardHeight: e.endCoordinates.height })
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => this.setState({ isKeyboardVisible: false, keyboardHeight: 0 })
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    handleChange = (text) => {
        this.setState({
            inputValue: text
        })
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
        console.log("Input valeu:", this.state.inputValue);
    }

    render() {
        return (
            <View style={[styles.container, { marginBottom: this.state.isKeyboardVisible ? this.state.keyboardHeight : 0 }]}>
                <View style={[styles.card, {
                    //marginBottom: 
                }]}>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type something here..."
                            placeholderTextColor={assets.basic.lightGray} // Tailwind's placeholder-gray-400
                            value={this.state.inputValue}
                            onChangeText={this.handleChange}
                            multiline // Allows multi-line input
                            scrollEnabled={true} // Allows scrolling for longer text
                            minHeight={48} // Equivalent to min-h-[48px]
                            maxHeight={150} // Equivalent to max-h-[150px]
                            accessibilityLabel="Text input field"
                            cursorColor={assets.basic.blue}
                        />

                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={this.handleSubmit}
                            activeOpacity={0.7} // Mimics hover effect
                            accessibilityLabel="Send message"
                        >
                            {/* Paper airplane SVG icon using react-native-svg */}
                            <Svg
                                width="20" // Equivalent to w-5
                                height="20" // Equivalent to h-5
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="white"
                                fill="none"
                            >
                                <Path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default InputBar;