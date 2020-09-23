import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AccountScreen from './widgets/AccountScreen';
import HomeScreen from './HomeScreen';
import CustomTabBar from './widgets/TabBar';


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currId: 1,
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {{
                    1: <HomeScreen />,
                    2: <AccountScreen />
                }[this.state.currId]}
                <CustomTabBar onSelect={(id) => { this.setState({ currId: id }) }} />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    container: {
        width: '100%',
        height: '100%',
    }
})