import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View styles={ styles.view }>
                <Text style={ styles.title }>Welcome</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'blue'
    },  
    title: {
        fontSize: 30
    }
})