import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View, 
  TextInput,
  Text,
} from 'react-native';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
} from 'native-base';

import Head from './ui/Head';
import Values from './ui/Values';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: 0.2,
      isReady: false,
    }
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

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
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Head />
          <View style={styles.container}>
            <View style={styles.input}>
              <Text style={styles.textStyle}>Enter Bill Total:</Text>
              <TextInput 
                value={this.state.inputValue}
                style={styles.billInput}
                keyboardType='numeric'
                placeholder='0.00'
                onChangeText={(text) => this.setState({inputValue: text})}
              />
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.tipButton}
                accessibilityLabel = '10% tip'
                onPress={() => this.setState({tip : 0.1})}
              >
                <Text style={styles.tipText}>10%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tipButton}
                accessibilityLabel = '15% tip'
                onPress={() => this.setState({tip : 0.15})}
                >
                  <Text style={styles.tipText}>15%</Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={styles.tipButton}
                accessibilityLabel = '18% tip'
                onPress={() => this.setState({tip : 0.18})}
                >
                  <Text style={styles.tipText}>20%</Text>
                </TouchableOpacity>
              <TextInput
                value={(this.state.tip * 100).toString}
                style={styles.customTip}
                keyboardType='numeric'
                placeholder='20%'
                onChangeText={(customTip) => this.updateCustomTip(customTip)}
              />
            </View>
            <View style={styles.calcGroup}>
              <TouchableOpacity style={styles.calcButton}
                onPress={() => this.alert}
              >
                <Text style={styles.textStyle}>Calculate</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.showTip}>
              <Values 
                tipPercent={this.state.tip}
                bill={this.state.inputValue}
              />
            </View>
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809C8E',
    alignItems: 'center',
    height: '100%', 
    width: '100%',
  },
  input: {
    backgroundColor: '#f2fff9',
    color: '#575757',
    height: '15%',
    width: '100%',
    padding: 10,
  },
  textStyle: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#ccc',
  },
  tipText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#ccc',
    fontSize: 25,
  },
  billInput: {
    fontSize: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
  },
  tipButton:{
    backgroundColor: '#98b392',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    },
  customTip: {
    backgroundColor: '#f2fff9',
    color: '#575757',
    textAlign: 'center',
    height: 100,
    width: 100,
    fontSize: 25,
  },
  calcButton: {
    backgroundColor: '#98b392',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  showTip: {
    flex: 1,
    justifyContent: 'center',
  },
});
