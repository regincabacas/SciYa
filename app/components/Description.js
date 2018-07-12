/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Header extends Component{
  render() {
    return (
        <View style={styles.header}>

          <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          </Text>

        </View>
      //</Image>
    );
  }
}

const styles = StyleSheet.create({
    headerBackground: {
      flex: 1,
      width: null,
      alignSelf: 'stretch'
    },
    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'rgba(255,255,255, 0.5)',
    },
    desc: {
      marginTop: 10,
      fontSize: 12,
      color: '#fff',
    },
  });
