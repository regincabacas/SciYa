import React, { Component } from 'react';
import { Button, View } from 'react-native';

import styles from '../config/styles';

export interface Props {
    navigation: any
}

class Screen1 extends Component<Props> {
    static navigationOptions = {
        title: 'Screen 1',
    }    
    render() {
        return (
            <View style={styles.container}>
                <Button
                title="Go to Screen 2"
                onPress={() => this.props.navigation.navigate('Screen2')}
                />
            </View>
        );
    }
}


export default Screen1;