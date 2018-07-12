import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Login from './Login';

export default class Bar extends Component {
  render() {
    return(
      <View style={styles.bar}>

        <TouchableOpacity style={[styles.barItem, styles.barseparator1]}>
          <Text style={styles.barTop}>4</Text>
          <Text style={styles.barBottom}>Subjects</Text>
        </TouchableOpacity>

         <TouchableOpacity style={[styles.barItem, styles.barseparator2]}>
          <Text style={styles.barTop}>80%</Text>
          <Text style={styles.barBottom}>Completed</Text>
          </TouchableOpacity>
      </View>

    );
  }

  gotoSubjects = () => {
    //Login Function or Firebase login
    this.props.navigation.navigate('Login');

}
}

const styles = StyleSheet.create({
  bar: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#ec2e4a',
    flexDirection: 'row'
  },
  barseparator1: {
    borderRightWidth: 1,
  },
  barseparator2: {
    borderLeftWidth: 1,
  },
  barItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center'
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  }
});