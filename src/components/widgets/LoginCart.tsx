import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Input } from 'react-native-elements';


interface IProps {
    callback: (Name: string, UnitId: string) => void,
}

interface IState {
    Name: string,
    UnitId: string,
}

class LoginCart extends Component<IProps, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            Name: "",
            UnitId: "",
        }
    }
    render() {
        return (
            <View style={styles.loginCart}>
                <Text h4 style={{ paddingBottom: 20, paddingLeft: 8 }}>Login</Text>
                <Input
                    placeholder="Name"
                    style={{ padding: 0, margin: 0 }}
                    label="Name"
                    labelStyle={{ fontSize: 12 }}
                    onChangeText={(Name) => {
                        this.setState({
                            Name: Name,
                        })
                        this.props.callback(Name, this.state.UnitId)
                    }}
                />
                <Input
                    placeholder="Unit ID"
                    style={{ padding: 0, margin: 0 }}
                    label="Unit ID"
                    labelStyle={{ fontSize: 12 }}
                    onChangeText={(UnitId) => {
                        this.setState({
                            UnitId: UnitId,
                        })
                        this.props.callback(this.state.Name, UnitId)
                    }}
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