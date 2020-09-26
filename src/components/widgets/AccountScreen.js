import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default class AccountScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ height: 300 }}>
                <ViewPager style={[styles.viewPager, { height: 400 }]}
                    initialPage={0}
                    showPageIndicator={true}
                    // keyboardDismissMode= {"on-drag"}
                    transitionStyle="curl">
                    <View key="1" style={{backgroundColor: 'red'}}>
                        <Text style={{fontSize: 35}}>First page</Text>
                        <Text style={{fontSize: 35}}>First page</Text>
                    </View>
                    <View key="2" style={{backgroundColor: 'blue'}}>
                        <Text style={{fontSize: 35}}>Second page</Text>
                    </View>
                </ViewPager>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});