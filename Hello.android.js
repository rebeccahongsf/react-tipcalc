import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Hello() {
    return (
        <View>
            <Text style={styles.hello}>Hello Android!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: 'rebeccapurple',
        textAlign: 'center',
    }
});