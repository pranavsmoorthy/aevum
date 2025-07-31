import { StatusBar } from 'expo-status-bar';
import React, { use, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


import { styleJSON } from './style.js';

import DbItem from '../../components/DbItem/index.js';

const styles = StyleSheet.create(styleJSON());

export default function memoryPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 20,
        }}>
          <Text style={styles.title}>Memories</Text>
          <TouchableOpacity
              onPress={console.log("Closed")}
              style={styles.closeIcon}
              accessibilityLabel="Add"
          >
            <View style={styles.addContainer}>
              <Text style={styles.addIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DbItem 
          text="This is some example text displayed in a beautifully rounded box. You can customize this text to anything you need!"
          year="2023"
        />
        <DbItem 
          text="This is some example text displayed in a beautifully rounded box. You can customize this text to anything you need!"
          year="2023"
        />
        <DbItem 
          text="This is some example text displayed in a beautifully rounded box. You can customize this text to anything you need!"
          year="2023"
        />
        <DbItem 
          text="This is some example text displayed in a beautifully rounded box. You can customize this text to anything you need!"
          year="2023"
        />
      </View>
    </ScrollView>
  );
}
