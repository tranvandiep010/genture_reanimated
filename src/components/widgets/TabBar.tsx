import React, { Component } from 'react';
import { StyleSheet, TouchableNativeFeedback, View, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
//import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

interface IItemProps {
    id: number,
    onSelect: (id: number) => void,
    icon: any,
    primaryColor: any,
    label: string,
    width: number,
    translate: any,
    secondaryColor: string,
}

interface IItemState {
    translateXValue: any
}


class TabBarItem extends Component<IItemProps, IItemState> {

    constructor(props: any) {
        super(props)
        this.fadeIn = this.fadeIn.bind(this)
        this.fadeOut = this.fadeOut.bind(this)
        this.state = {
            translateXValue: new Animated.Value(-this.props.width),
        }
    }

    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(this.state.translateXValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true
        }).start();
    };

    fadeOut = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(this.state.translateXValue, {
            toValue: -this.props.width,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };

    componentDidMount() {
        this.fadeIn();
    }

    componentWillUnmount() {
        this.fadeOut()
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.onSelect(this.props.id)}>
                <Animated.View style={{
                    flexGrow: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 54,
                    minWidth: 0,
                    maxWidth: this.props.width,
                    backgroundColor: this.props.width == 120 ? this.props.secondaryColor : 'white',
                    borderRadius: 27,
                    margin: 10,
                    transform: [{ translateX: this.state.translateXValue }]
                }}>
                    <View style={{
                        height: 25,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <AnimatedIcon name={this.props.icon}
                            size={25}
                            style={{ color: this.props.primaryColor }} />
                    </View>
                    {this.props.width == 120 ? <Animated.Text style={{
                        fontSize: 16,
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
            </TouchableWithoutFeedback>
        );
    }
}


interface IProps {
    onSelect: (id: number) => void,
}

interface IState {
    tabBarItemSize: number[]
}

export default class CustomTabBar extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            tabBarItemSize: [120, 40, 40, 40]
        }
        this.changeTab = this.changeTab.bind(this)
    }



    changeTab(id: number) {
        this.props.onSelect(id)
        switch (id) {
            case 1:
                this.setState({
                    tabBarItemSize: [120, 40, 40, 40]
                })
                break;
            case 2:
                this.setState({
                    tabBarItemSize: [40, 120, 40, 40]
                })
                break;
            case 3:
                this.setState({
                    tabBarItemSize: [40, 40, 120, 40]
                })
                break;
            default:
                this.setState({
                    tabBarItemSize: [40, 40, 40, 120]
                })
                break;
        }
    }

    render() {
        return (
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                backgroundColor: 'white',
                position: 'absolute',
                bottom: 0,
                zIndex: 1,
                elevation: 1,
            }}>
                <TabBarItem onSelect={(id) => this.changeTab(id)}
                    id={1}
                    icon={"home"}
                    label={"Home"}
                    primaryColor={"red"}
                    translate={6}
                    width={this.state.tabBarItemSize[0]}
                    secondaryColor={"rgba(255,0,0,0.2)"}
                />
                <TabBarItem onSelect={(id) => this.changeTab(id)}
                    id={2}
                    icon={"hearto"}
                    label={"Heart"}
                    primaryColor={"purple"}
                    translate={6}
                    width={this.state.tabBarItemSize[1]}
                    secondaryColor={"rgba(128,0,128,0.2)"}
                />
                <TabBarItem onSelect={(id) => this.changeTab(id)}
                    id={3}
                    icon={"user"}
                    label={"Account"}
                    primaryColor={"orange"}
                    translate={6}
                    width={this.state.tabBarItemSize[2]}
                    secondaryColor={"rgba(255,165,0,0.2)"}
                />
                <TabBarItem onSelect={(id) => this.changeTab(id)}
                    id={4}
                    icon={"search1"}
                    label={"Search"}
                    primaryColor={"#5f9ea0"}
                    translate={6}
                    width={this.state.tabBarItemSize[3]}
                    secondaryColor={"rgba(95,158,160,0.2)"}
                />
            </View>
        );
    }
}