import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Hello() {
    return (
        <View>
            <Text style={styles.hello}>Hello iOS!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: '#eee',
        textAlign: 'center',
    }
});