import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Hello />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809C8E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
