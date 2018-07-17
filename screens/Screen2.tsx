import React, { Component } from 'react'
import { View, Button } from 'react-native'

import styles from '../config/styles'


export interface Props {
    navigation: any
}

class Screen2 extends Component<Props> {
    static navigationOptions = {
        title: 'Screen 2',
    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default Screen2;