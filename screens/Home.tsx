import React, { Component } from 'react';
import { Button, Platform, Text, View } from 'react-native';

import styles from '../config/styles';

export interface Props {
    navigation: any
}

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

class Home extends Component<Props> {
    static navigationOptions = {
        title: 'Home',
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to RNFirestarters!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button
                title="Go to Screen 1"
                onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </View>
        );
    }
}

export default Home;