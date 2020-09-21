import React, { Component } from 'react';
import CustomTabBar from './widgets/TabBar';

export default class TimeLine extends Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <CustomTabBar onSelect={() => { }} />
        );
    }
}