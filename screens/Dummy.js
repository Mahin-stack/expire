import React, { Component } from 'react';
import {View, Text , StyleSheet} from 'react-native';

export default class Dummy extends Component {
    render() {
        return (
            <View style={styles.cont}>
                <Text> Dummy </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
})