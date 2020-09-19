/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, { Component } from "react";
import { View, Text, Dimensions, StyleSheet, Image, Button, RefreshControl, ActivityIndicator } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import { User } from "../models/User";

interface IProps {
    newData: User[],
    refreshData: (callback: any) => void,
    getNextData: (currPage: number, callback: any) => void,
    isRefresh: boolean,
}

interface IState {
    cardSize: number,
    screenSize: number,
    loading: boolean,
    data: User[],
    currPage: number,
}

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};

let containerCount = 0;

class CellContainer extends React.Component {
    _containerId: any
    constructor(props: any) {
        super(props);
        this._containerId = containerCount++;
    }
    render() {
        return <View {...this.props} style={styles.card}>
            <View style={styles.imageCard}>
                <Image source={require("../../assets/tree.png")} resizeMode='contain' style={{ height: '100%', width: '100%' }}></Image>
            </View>
            <Text style={{ fontSize: 18 }}>{this.props.name}</Text>
            <Text>abc</Text>
        </View>;
    }
}

/***
 * To test out just copy this component and render in you root component
 */
export default class UserManagement extends Component<IProps, IState> {
    _layoutProvider: any
    dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });
    constructor(props: any) {
        super(props);

        let { width } = Dimensions.get("window");


        this._layoutProvider = new LayoutProvider(
            index => {
                if (index % 2 === 0) {
                    return ViewTypes.HALF_LEFT;
                } else {
                    return ViewTypes.HALF_RIGHT;
                }
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.HALF_LEFT:
                        dim.width = width / 2 - 0.0001;
                        dim.height = this.state.cardSize;
                        break;
                    case ViewTypes.HALF_RIGHT:
                        dim.width = width / 2;
                        dim.height = this.state.cardSize;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);


        //Since component should always render once data has changed, make data provider part of the state
        this.state = {
            cardSize: 250,
            screenSize: 700,
            loading: false,
            data: [],
            currPage: 1,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.refreshData(() => { this.setState({ loading: false }) });
    }

    //Given type and data return the view component
    _rowRenderer(type: any, data: any) {
        //You can return any view here, CellContainer has no special significance
        switch (type) {
            case ViewTypes.HALF_LEFT:
                return (
                    <CellContainer style={styles.containerGridLeft} name={data.userId}>
                        <Text>Data: {data}</Text>
                    </CellContainer>
                );
            case ViewTypes.HALF_RIGHT:
                return (
                    <CellContainer style={styles.containerGridRight} name={data.userId}>
                        <Text>Data: {data}</Text>
                    </CellContainer>
                );
            default:
                return null;
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
        if (this.props.newData !== nextProps.newData && nextProps.newData != null) {
            if (!nextProps.isRefresh) {
                this.dataProvider = this.dataProvider.cloneWithRows([...this.state.data, ...nextProps.newData]);
                this.setState({ data: [...this.state.data, ...nextProps.newData] });
            } else {
                this.dataProvider = this.dataProvider.cloneWithRows(nextProps.newData)
                this.setState({
                    data: nextProps.newData,
                })
            }
        }
    }

    render() {
        if (!this.state.loading && this.state.data != null && this.state.data.length > 0) {
            return (
                <View style={{ height: 700 }}>
                    <RecyclerListView layoutProvider={this._layoutProvider}
                        dataProvider={this.dataProvider}
                        rowRenderer={this._rowRenderer}
                        // extendedState={dataProvider}
                        // onScroll={(rawEvent: ScrollEvent, offsetX: number, offsetY: number) => {
                        //     this.offset = offsetY
                        // }}
                        style={{ backgroundColor: '#f0f0f0' }}
                        isHorizontal={false}
                        // initialOffset={this.offset}
                        scrollThrottle={300}
                        // canChangeSize={true}
                        scrollViewProps={
                            {
                                refreshControl: (
                                    <RefreshControl
                                        refreshing={this.state.loading}
                                        onRefresh={
                                            async () => {
                                                this.setState({ loading: true });
                                                await this.props.refreshData(() => {
                                                    this.setState({
                                                        loading: false
                                                    })
                                                });
                                            }
                                        }
                                    />
                                )
                            }}
                        onEndReached={
                            async () => {
                                await this.props.getNextData(this.state.currPage, () => { })
                            }
                        }
                        onEndReachedThreshold={100}
                    />
                </View>
            )
        } else {
            return <ActivityIndicator size="large" color="#00ff00" />
        }
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "flex-start",
        flex: 1,
        backgroundColor: "#00a1f1"
    },
    containerGridLeft: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    containerGridRight: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    card: {
        height: '100%',
        marginHorizontal: 8,
        marginVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
    imageCard: {
        padding: 5,
        height: 180,
        width: '100%',
        // borderWidth: 0.8,
        // borderColor: '#0003',
        backgroundColor: 'white',
        borderRadius: 10,

    },
});
