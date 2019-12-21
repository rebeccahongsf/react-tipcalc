import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const Values = ({tipPercent, bill}) => {
    let tip = 0.00;
    let total = 0.00;
    if(bill) {
        tip = parseFloat(bill * tipPercent);
        total = parseFloat(bill) + tip;
        tip = (Math.round(tip * 100)/100).toFixed(2);
        total = (Math.round(total * 100)/100).toFixed(2);
    }

    return(
        <View>
            <Text style={styles.textStyle}>
              Tip: ${tip}
            </Text>
            <Text style={styles.textStyle}>
              Total: ${total}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '600',
    fontSize: 25,
    textTransform: 'uppercase',
    color: '#ccc',
  },
});

export default Values;