import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface IItemProps {
    onSelect: (id: string) => void,
    icon: any,
    primaryColor: any,
    label: string,
    width: number,
    translate: any,
    isActive: boolean,
    secondaryColor: string,
}

interface IItemState {
}


class TabBarItem extends Component<IItemProps, IItemState> {

    render() {
        return (
            <TouchableNativeFeedback onPress={() => { }}>
                <Animated.View style={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 54,
                    width: this.props.width,
                    backgroundColor: this.props.secondaryColor,
                    borderRadius: 27,
                    // margin: 5,
                }}>
                    <View style={{
                        height: 25,
                        width: 25,
                        //alignItems: 'center',
                        //justifyContent: 'center'
                    }}>
                        <AnimatedIcon name={this.props.icon}
                            size={25}
                            style={{ color: this.props.primaryColor }} />
                    </View>
                    {this.props.isActive ? <Animated.Text style={{
                        fontSize: 16,
                        //opacity: 0.5,
                        width: 60,
                        color: this.props.primaryColor,
                        transform: [
                            {
                                translateX: this.props.translate
                            }
                        ]
                    }}>
                        {this.props.label}
                    </Animated.Text>
                        : null
                    }
                </Animated.View>
            </TouchableNativeFeedback>
        );
    }
}


interface IProps {
    onSelect: (id: string) => void,
}

interface IState {
    homeSize: number,
    searchSize: number,
    accountSize: number,
    heartSize: number,
}

export default class CustomTabBar extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            homeSize: 120,
            accountSize: 40,
            heartSize: 40,
            searchSize: 40,
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: 'white'
            }}>
                <TabBarItem onSelect={() => { }}
                    icon={"home"}
                    label={"Home"}
                    primaryColor={"red"}
                    translate={40}
                    width={this.state.homeSize}
                    isActive={true}
                    secondaryColor={"pink"} />
                <TabBarItem onSelect={() => { }}
                    icon={"hearto"}
                    label={"Home"}
                    primaryColor={"red"}
                    translate={40}
                    width={this.state.heartSize}
                    isActive={false}
                    secondaryColor={"white"} />
                <TabBarItem onSelect={() => { }}
                    icon={"user"}
                    label={"Home"}
                    primaryColor={"red"}
                    translate={40}
                    width={this.state.accountSize}
                    isActive={false}
                    secondaryColor={"white"} />
                <TabBarItem onSelect={() => { }}
                    icon={"search1"}
                    label={"Home"}
                    primaryColor={"red"}
                    translate={40}
                    isActive={false}
                    width={this.state.searchSize}
                    secondaryColor={"white"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TabBar: {
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        minWidth: 200,
        maxWidth: '100%',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,
    }
})
