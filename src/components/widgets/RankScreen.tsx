import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Image, ScrollView, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview';

interface IProps { }
interface IStates {
    dataProvider: any
}

export default class RankScreen extends Component {
    _layoutProvider: any
    constructor(props: any) {
        super(props)
        this._rankRenderer = this._rankRenderer.bind(this)
        let _dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
        this._layoutProvider = new LayoutProvider(
            index => {
                return index;
            },
            (type, dim) => {
                dim.width = 400;
                dim.height = 80;
            }
        );
        this.state = {
            dataProvider: _dataProvider.cloneWithRows(["NearBy", "Trivia", 'Express', 'Asia']),
        }
    }

    _rankRenderer(type: any, data: any, index: any) {
        console.log(data)
        return (
            <View style={{ height: 60, width: '100%', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>4</Text>
                    <Image source={require("../../../assets/rank.jpg")} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25
                    }} />
                    <Text>Marcus</Text>
                    <Text style={{ padding: 3, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 20 }}>130</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'rgba(0,0,0,0.2)',
                        borderBottomWidth: 0.5,
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.search}>
                        <TextInput
                            style={{
                                width: '93%'
                            }}
                            inlineImageLeft='search'
                            inlineImagePadding={15}
                            placeholder="Search by restaurant" />
                        <Icon
                            name='close'
                            style={{
                                width: '7%',
                                fontSize: 16,
                                color: 'rgba(0,0,0,0.5)'
                            }} />
                    </View>
                    <View style={styles.infoStore}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                        }}>
                            <Text style={{ fontSize: 35, fontWeight: 'bold', fontFamily: 'Fredoka One' }}>Katsuei</Text>
                            <Image source={require("../../../assets/TriviaCertified.png")} style={{ height: 35, width: 35 }} />
                        </View>
                        <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }}>Japanese - Sushi</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 5 }}>
                            <View style={{
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                width: 100,
                                borderRadius: 12,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8,
                            }}>
                                <Icon
                                    name='clockcircle'
                                    style={{
                                        margin: 5,
                                        fontSize: 12,
                                    }} />
                                <Text style={{ fontSize: 13 }}>10-20 min</Text>
                            </View>
                            <View style={{
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                width: 100,
                                borderRadius: 12,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8,
                            }}>
                                <Icon
                                    name='pay-circle1'
                                    style={{
                                        margin: 5,
                                        fontSize: 12,
                                    }} />
                                <Text style={{ fontSize: 13 }}>$2.99</Text>
                            </View>
                            <View style={{
                                backgroundColor: 'rgba(0,0,0,0.1)',
                                width: 100,
                                borderRadius: 12,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8,
                            }}>
                                <Icon
                                    name='star'
                                    style={{
                                        margin: 5,
                                        fontSize: 12,
                                    }} />
                                <Text style={{ fontSize: 13 }}>4.8</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.timeOrder}>
                        <Image source={require("../../../assets/Location.png")} style={{
                            width: '100%',
                            borderRadius: 15,
                        }} />
                        <View style={styles.position}>
                            <Icon
                                name='enviroment'
                                style={{ fontSize: 15, margin: 2 }} />
                            <Text>210 7th Ave, Brooklyn, NY 11215</Text>
                        </View>
                        <Text style={{
                            color: 'rgba(0,0,0,0.5)',
                            fontSize: 12,
                            margin: 5
                        }}>1.5 miles away</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <Icon
                                name='circledown'
                                color='#12E767'
                                style={{ margin: 5 }} />
                            <Text>Takeing orders until 9:30 pm</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.leaderboard}>
                    <Text style={{
                        color: 'white',
                        fontSize: 35,
                        fontWeight: 'bold',
                        margin: 10
                    }}>Leaderboard</Text>
                    <View style={styles.selection}>
                        <Text style={{
                            flex: 1,
                            alignSelf: 'center',
                            color: '#E92F48',
                            backgroundColor: 'white',
                            textAlign: 'center',
                            borderBottomLeftRadius: 14,
                            borderTopLeftRadius: 14,
                        }}>Friends</Text>
                        <Text style={{
                            flex: 1,
                            alignSelf: 'center',
                            textAlign: 'center',
                            color: 'white',
                            borderBottomRightRadius: 14,
                            borderTopRightRadius: 14,
                        }}>All</Text>
                    </View>
                    <View style={styles.top3}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-end',
                        }}>
                            <View style={{
                                alignItems: 'center',
                                marginBottom: -20,
                            }}>
                                <Image source={require("../../../assets/rank.jpg")}
                                    style={{
                                        borderWidth: 4,
                                        borderColor: '#A0A8B1',
                                        width: 66,
                                        height: 66,
                                        borderRadius: 33,
                                    }} />
                                <Text style={{ color: 'white' }}>Zac</Text>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>100</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                            }}>
                                <Image source={require("../../../assets/rank.jpg")}
                                    style={{
                                        borderWidth: 4,
                                        borderColor: '#FFC107',
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40,
                                    }} />
                                <Text style={{ color: 'white' }}>Zac</Text>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>100</Text>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                marginBottom: -20,
                            }}>
                                <Image source={require("../../../assets/rank.jpg")}
                                    style={{
                                        borderWidth: 4,
                                        borderColor: '#D97953',
                                        width: 66,
                                        height: 66,
                                        borderRadius: 33,

                                    }} />
                                <Text style={{ color: 'white' }}>Zac</Text>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>100</Text>
                            </View>
                        </View>
                        <Image source={require("../../../assets/LeaderboardStages.png")}
                            resizeMode='contain'
                            style={{ width: 250 }} />
                    </View>
                    <View style={[styles.box, {
                        height: 500,
                        width: '100%',
                        backgroundColor: 'white',
                        padding: 25,
                        marginTop: -30
                    }]}>
                        <RecyclerListView
                            dataProvider={this.state.dataProvider}
                            rowRenderer={this._rankRenderer}
                            layoutProvider={this._layoutProvider}
                        />
                    </View>
                    <View style={[styles.box, styles.profile]}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require("../../../assets/rank.jpg")}
                                style={{
                                    height: 120,
                                    width: 120,
                                    borderRadius: 60,
                                    borderWidth: 4,
                                    borderColor: '#E92F48'
                                }} />
                            <View style={{
                                height: 44,
                                width: 44,
                                borderRadius: 22,
                                borderWidth: 3,
                                borderColor: 'white',
                                backgroundColor: '#E92F48',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: -20
                            }}>
                                <Icon
                                    name="star"
                                    style={{ fontSize: 14 }}
                                />
                                <Text>2</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            borderRadius: 20,
                        }}>
                            <Text>24 point til</Text>
                            <View style={{
                                height: 20,
                                width: 20,
                                borderRadius: 10,
                                borderColor: 'white',
                                backgroundColor: '#E92F48',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginHorizontal: 3
                            }}>
                                <Icon
                                    name="star"
                                    style={{ fontSize: 8, color: 'white' }}
                                />
                                <Text style={{ fontSize: 10, color: "white" }}>2</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 30 }}>Enzo</Text>
                            <Text>Brooklyn, NY</Text>
                        </View>
                        <View style={{
                            width: 200,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 26, fontWeight: '900' }}>12</Text>
                                <Text>friends</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 26, fontWeight: '900' }}>4</Text>
                                <Text>badges</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //height: '100%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        zIndex: 0,
        elevation: 0,
    },
    search: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 15,
    },
    infoStore: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    timeOrder: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginVertical: 15
    },
    position: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
    },
    leaderboard: {
        width: '100%',
        backgroundColor: '#E92F48',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 100,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        paddingHorizontal: 20,
    },
    selection: {
        width: 180,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    top3: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 260,
        marginHorizontal: 15,
        marginTop: 15,
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius: 10,
    },
    profile: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 450,
        backgroundColor: 'white',
        marginTop: 20,
    }
})