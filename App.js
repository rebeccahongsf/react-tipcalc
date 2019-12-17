import Expo from 'expo';
import React from 'react';
import {  Button, 
          StyleSheet, 
          Text, 
          View, 
          TextInput 
        } from 'react-native';

import {
  Container,
  Content,
  Header,
  Left, 
  Body, 
  Right, 
  Title,
} from 'native-base';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  };

  updateCustomTip(customTip) {
    if(customTip) {
      this.setState({
        tip: parseFloat(customTip)/100,
      });
    } else {
      this.setState({ tip: 0 })
    }
  }

  render() {
    let tip = 0.00;
    if(this.state.inputValue) {
      tip = parseFloat(this.state.inputValue * this.state.tip)
      tip = (Math.round(tip * 100)/100).toFixed(2);
    }
    return (
      <Container>
        <Header>
          <Left>
            <Body>
              <Title>Tip Calculator</Title>
            </Body>
          </Left>
        </Header>
          <Content padder>
          <View style={styles.container}>
            <Text>
              ${tip}
            </Text>
            <TextInput 
              value={this.state.inputValue}
              style={styles.input}
              keyboardType='numeric'
              placeholder='0.00'
              onChangeText={(text) => this.setState({inputValue: text})}
            />
            <View style={styles.buttonGroup}>
              <Button
                title="10%"
                onPress={() => this.setState({tip : 0.1})}
              />
              <Button
                title="15%"
                onPress={() => this.setState({tip : 0.15})}
              />
              <Button
                title="20%"
                onPress={() => this.setState({tip : 0.2})}
              />
              <TextInput 
                value={(this.state.tip * 100).toString}
                style={styles.customTip}
                keyboardType='numeric'
                placeholder='20%'
                onChangeText={(customTip) => this.updateCustomTip(customTip)}
              />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809C8E',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#eee', 
    borderWidth: 1,
    padding: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  customTip: {
    height: 40,
    width: 50,
    borderColor: '#eee', 
    borderWidth: 1,
    padding: 5,
  }
});
