import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Bar extends Component {
  render() {
    return(
      <View style={styles.bar}>

        <View style={[styles.barItem, styles.barseparator]}>
          <Text style={styles.barTop}>4</Text>
          <Text style={styles.barBottom}>Subjects</Text>
        </View>

        <View style={[styles.barItem, styles.barseparator]}>
          <Text style={styles.barTop}>80%</Text>
          <Text style={styles.barBottom}>Completed</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    borderTopColor: '#fff',
    borderTopWidth: 4,
    backgroundColor: '#ec2e4a',
    flexDirection: 'row'
  },
  barseparator: {
    borderRightWidth: 4
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