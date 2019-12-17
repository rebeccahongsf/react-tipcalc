import React from 'react';
import {  Button, 
          StyleSheet, 
          Text, 
          View, 
          TextInput 
        } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  };

  render() {
    let tip = 0.00;
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue * this.state.tip)
      tip = (Math.round(tip * 100)/100).toFixed(2);
    }
    return (
      <View style={styles.container}>
        <Text>
          {tip} 
          {this.state.tip}
        </Text>
        <TextInput 
          value={this.state.inputValue}
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={(text) => this.setState({inputValue: text})}
        />
        <View>
          <Button
            title="10%"
            onPress={() => this.setState({tip : 0.1})}
          />
          <Button
            title="15%"
            onPress={() => this.setState({tip : 0.15})}
          />
          <Button
            title="18%"
            onPress={() => this.setState({tip : 0.18})}
          />
          <Button
            title="20%"
            onPress={() => this.setState({tip : 0.2})}
          />
        </View>
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
