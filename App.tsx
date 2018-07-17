import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default createStackNavigator({
  Home: {
    screen: Home,
  },
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
},{
  initialRouteName: 'Home',
}
);