import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, TextInput, ViewPropTypes, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { RecyclerListView, LayoutProvider, DataProvider } from 'recyclerlistview';
import { Store } from '../models/Store';
import StoreItem from './widgets/StoreItem';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this._categoryRowRenderer = this._categoryRowRenderer.bind(this)
        this._storeRowRenderer = this._storeRowRenderer.bind(this)
        let _dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
        this._categryLayoutProvider = new LayoutProvider(
            index => {
                return index;
            },
            (type, dim) => {
                dim.width = 120;
                dim.height = 60;
            }
        );
        this._storeLayoutProvider = new LayoutProvider(
            index => {
                return index;
            },
            (type, dim) => {
                dim.width = '100%';
                dim.height = 300;
            }
        );
        this.state = {
            currCate: 0,
            categoryProvider: _dataProvider.cloneWithRows(["NearBy", "Trivia", 'Express', 'Asia']),
            storeProvider: _dataProvider.cloneWithRows([new Store("Kasuite", "Nam Dinh", "Nem", "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"),
            new Store("Kasuite", "Nam Dinh", "Nem", "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg"),
            new Store("Kasuite", "Nam Dinh", "Nem", "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg")])
        }
    }

    _categoryRowRenderer(type: any, data: any, index: any) {
        switch (index) {
            case this.state.currCate:
                return (
                    <View style={[styles.category, {
                        backgroundColor: 'red',
                        shadowColor: "red",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 5.46,

                        elevation: 9,
                    }]} name={data}>
                        <Text style={{ color: 'white', fontWeight: "bold" }}>{data}</Text>
                    </View>
                );
            default:
                return (
                    <View style={[styles.category, {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,

                        elevation: 8,
                    }]} name={data}>
                        <Text>{data}</Text>
                    </View>
                );;
        }
    }

    _storeRowRenderer(type: any, data: any, index: any) {
        console.log(data)
        return (
            <StoreItem store={data} />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={styles.address}>Dilivering to Brooklyn</Text>
                    <TouchableNativeFeedback>
                        <Icon
                            name='shoppingcart'
                            size={30}
                            style={{ color: 'black', padding: 15 }} />
                    </TouchableNativeFeedback>
                </View>
                <View style={styles.search}>
                    <TextInput
                        style={{
                            width: '93%'
                        }}
                        inlineImageLeft='search'
                        inlineImagePadding={5} />
                    <Icon
                        name='close'
                        style={{
                            width: '7%',
                            fontSize: 16,
                            color: 'rgba(0,0,0,0.5)'
                        }} />
                </View>
                <View style={styles.discover}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Discover</Text>
                    <RecyclerListView
                        dataProvider={this.state.categoryProvider}
                        rowRenderer={this._categoryRowRenderer}
                        layoutProvider={this._categryLayoutProvider}
                        isHorizontal={true}
                        style={{ height: 70, }} />
                </View>
                <View style={styles.stores}>
                    <RecyclerListView
                        dataProvider={this.state.storeProvider}
                        rowRenderer={this._storeRowRenderer}
                        layoutProvider={this._storeLayoutProvider} />
                </View>
                {/* <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__340.jpg" }}
                    style={{ height: 200, resizeMode: 'stretch', margin: 5, width: '100%' }} /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
    },
    address: {
        fontSize: 20,
    },
    search: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 15,
    },
    discover: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 100,
        width: '100%',
    },
    category: {
        width: 100,
        height: 35,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    stores: {
        height: '100%',
        width: '100%',
    }
})