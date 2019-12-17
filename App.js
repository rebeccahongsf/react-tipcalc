import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: 'Hi',
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.inputValue}
          style={styles.input} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809C8E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#eee', 
    borderWidth: 1,
    padding: 5,
  },
});
