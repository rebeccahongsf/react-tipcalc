import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#809C8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#fff',
    flex: 4,
    width: '100%',
  },
  view2: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
  }
});
