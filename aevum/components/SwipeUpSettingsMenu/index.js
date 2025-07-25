import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
  Dimensions,
  Image
} from 'react-native';

import { styleJSON } from './style';

const { height: screenHeight } = Dimensions.get('window');

class SwipeUpSettingsMenuClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };

    // Animated value for menu position
    this.menuPosition = new Animated.Value(screenHeight * 0.8); // Start hidden (80% of screen height from top)

    this.startY = 0;
    this.isSwiping = false; // Flag to track if a swipe is in progress

    // PanResponder for gesture handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // Allow this view to become the responder
      onMoveShouldSetPanResponder: () => true, // Allow this view to become the responder on move

      onPanResponderGrant: (evt, gestureState) => {
        // User has started a touch
        this.isSwiping = true;
        this.startY = gestureState.y0; // Initial Y position of the touch
      },

      onPanResponderMove: (evt, gestureState) => {
        if (!this.isSwiping) return;

        const currentY = gestureState.moveY;
        const diffY = this.startY - currentY; // Positive if swiping up

        const SWIPE_THRESHOLD = 50; // Pixels to consider a "swipe up"

        if (diffY > SWIPE_THRESHOLD && !this.state.menuOpen) {
          // If swiped up beyond threshold and menu is not open
          this.setState({ menuOpen: true }, () => {
            // Animate menu to slide up
            Animated.timing(this.menuPosition, {
              toValue: 0, // Slide up to the top (0 offset from top)
              duration: 300,
              useNativeDriver: true, // Use native driver for performance
            }).start();
          });
          this.isSwiping = false; // Reset swiping state after triggering
        }
      },

      onPanResponderRelease: () => {
        // User has released the touch
        this.isSwiping = false;
      },
    });

    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // If menu was open and is now closed, animate it down
    if (prevState.menuOpen && !this.state.menuOpen) {
      Animated.timing(this.menuPosition, {
        toValue: screenHeight * 0.8, // Slide down to hidden position
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Swipe Up Area Trigger */}
        <View
          // Apply panHandlers to the swipe area
          {...this.panResponder.panHandlers}
          style={styles.swipeUpArea}
        />

        {/* Settings Menu */}
        <Animated.View
          style={[
            styles.settingsMenu,
            { transform: [{ translateY: this.menuPosition }] }, // Apply animation
          ]}
        >
          <View style={styles.settingsHeader}>
            <Text style={styles.settingsTitle}>Settings w</Text>
            <TouchableOpacity
              onPress={this.closeMenu}
              style={styles.closeButton}
              accessibilityLabel="Close settings menu"
            >
              {/* Using a simple Text 'X' for the close icon.
                  For more advanced icons, consider 'react-native-vector-icons'. */}
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingsContent}>
            <View style={styles.settingItemBlue}>
              <Text style={styles.settingItemTitleBlue}>General Options</Text>
              <Text style={styles.settingItemDescription}>Adjust application preferences.</Text>
            </View>
            <View style={styles.settingItemGreen}>
              <Text style={styles.settingItemTitleGreen}>Account Settings</Text>
              <Text style={styles.settingItemDescription}>Manage your profile and security.</Text>
            </View>
            <View style={styles.settingItemYellow}>
              <Text style={styles.settingItemTitleYellow}>Notifications</Text>
              <Text style={styles.settingItemDescription}>Configure alert preferences.</Text>
            </View>
            <View style={styles.settingItemPurple}>
              <Text style={styles.settingItemTitlePurple}>Privacy Controls</Text>
              <Text style={styles.settingItemDescription}>Manage your data and privacy.</Text>
            </View>
            <Text style={styles.aboutAppInfoHeader}>About This App</Text>
            <Text style={styles.aboutAppInfoSubject}>App Version</Text>
            <Text style={styles.aboutAppInfoSubject}>App Info</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create(styleJSON({
  screenHeight: screenHeight,
}))

export default SwipeUpSettingsMenuClass;
