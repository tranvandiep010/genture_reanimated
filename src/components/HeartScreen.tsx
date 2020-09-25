import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';


interface IProps {
    uploadFile: (uri: string, type: string, name: string, size: number, callback: any) => void

}

interface IStates {
    loading: boolean,
}

export default class HeartScreen extends Component<IProps, IStates> {
    constructor(props: any) {
        super(props)

        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={async () => {
                        try {
                            const res = await DocumentPicker.pick({
                                type: [DocumentPicker.types.allFiles],
                            });
                            this.props.uploadFile(res.uri, res.type, res.name, res.size, () => {
                                this.setState({
                                    loading: true,
                                })
                            })
                        } catch (err) {
                            if (DocumentPicker.isCancel(err)) {
                                // User cancelled the picker, exit any dialogs or menus and move on
                            } else {
                                throw err;
                            }
                        }
                    }}
                    title="File Picker" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

    }
})