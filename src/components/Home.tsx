import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AccountScreen from './widgets/AccountScreen';
import HomeScreen from './HomeScreen';
import HeartScreen from './HeartScreen'
import CustomTabBar from './widgets/TabBar';
import RankScreen from './widgets/RankScreen';

interface IProps {
    uploadFile: (uri: string, type: string, name: string, size: number, callback: any) => void
}

interface IState {

}

export default class Home extends Component<IProps, IState> {

    constructor(props: any) {
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
                    2: <HeartScreen uploadFile={this.props.uploadFile} />,
                    3: <RankScreen />,
                    4: <AccountScreen />
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