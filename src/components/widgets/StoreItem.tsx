import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Store } from '../../models/Store';

interface IProps {
    store: Store
}

interface IState {

}

export default class StoreItem extends Component<IProps, IState> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View style={styles.imageItem}>
                <Image source={{ uri: this.props.store.imageUrl }}
                    style={{ height: 200, resizeMode: 'stretch', width: '100%', borderRadius: 10 }} />
                <View style={styles.info}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: '65%', height: '100%' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Katseui</Text>
                        <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 12, }}>Japanese - Sushi</Text>
                        <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 12, }}>10-15 min $2.99</Text>
                    </View>
                    <View style={styles.rank}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: -8 }}>
                            <View style={{ height: 50, width: 50, borderRadius: 12, borderWidth: 2, borderColor: 'white', zIndex: 0, elevation: 0 }}>
                                <Image source={require("../../../assets/rank.jpg")} resizeMode="cover" style={styles.imageRank} />
                            </View>
                            <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 1, borderColor: 'white', zIndex: 1, elevation: 1, margin: -5 }}>
                                <Image source={require("../../../assets/rank.jpg")}
                                    resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 12 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: -8 }}>
                            <View style={{ height: 50, width: 50, borderRadius: 12, borderWidth: 2, borderColor: 'white', zIndex: 0, elevation: 0 }}>
                                <Image source={require("../../../assets/rank1.jpg")} resizeMode="cover" style={styles.imageRank} />
                            </View>
                            <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 1, borderColor: 'white', zIndex: 1, elevation: 1, margin: -5 }}>
                                <Image source={require("../../../assets/rank1.jpg")}
                                    resizeMode="cover" style={{ width: '100%', height: '100%', borderRadius: 12 }} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rank: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '35%',
    },
    imageRank: {
        width: 50,
        height: 50,
        borderRadius: 25,

    },
})