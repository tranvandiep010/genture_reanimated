import React, { Component } from 'react';
import { Image, View } from 'react-native';
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
            <View>
                <Image source={{ uri: this.props.store.imageUrl }}
                    style={{ height: 200, resizeMode: 'stretch', margin: 5, width: '100%' }} />
            </View>
        );
    }
}