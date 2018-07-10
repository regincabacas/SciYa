/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './Header';
import Bar from './Bar';

export default class Profile extends Component{
  render() {
    return (
        <View style={styles.container}>
        <Header />
        <Bar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
  
    },
  });