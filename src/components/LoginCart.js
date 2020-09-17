import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Input } from 'react-native-elements';

class LoginCart extends Component {
    render() {
        return (
            <View style={styles.loginCart}>
                <Text h4 style={{ paddingBottom: 20, paddingLeft: 8 }}>Login</Text>
                <Input
                    placeholder="Name"
                    style={{ padding: 0, margin: 0 }}
                    label="Name"
                    labelStyle={{ fontSize: 12 }}
                />
                <Input
                    placeholder="Unit ID"
                    style={{ padding: 0, margin: 0 }}
                    label="Unit ID"
                    labelStyle={{ fontSize: 12 }}
                />
            </View>
        );
    }
}

export default LoginCart

const styles = StyleSheet.create({
    loginCart: {
        //height: 300,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
});