/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
//import Profile2 from './app/components/Profile2';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Application = createStackNavigator({
  Home: {screen: Login},
  Profile: {screen: Profile},
  }, {
        navigationOptions: {
          header: false,
        }
});


export default class App extends Component{
  render() {
    return (
      <Application />
    );
  }
}

