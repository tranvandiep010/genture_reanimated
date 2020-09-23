import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AccountScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        height: '100%'
    }
})