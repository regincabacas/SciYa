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
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {createStackNavigator} from 'react-navigation';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    
    componentDidMount(){
        this._loadInitialState().done();
    }
        _loadInitialState = async () => {
            var value = await AsyncStorage.getItem('user');
            if(value != null){
                this.props.navigation.navigate('Profile');
            }
        }


    render() {
    return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}> Welcome to SciYa! </Text>
                    <Text style={styles.subheader}> Learning Science is Fun! </Text>
                    
                    <TextInput style={styles.textInput} placeholder='Username'
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid='transparent' />
                    
                     <TextInput style={styles.textInput} placeholder='Password'
                    onChangeText={(password) => this.setState({password})}
                    underlineColorAndroid='transparent' />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
    );
  }

  login = () => {
      //Login Function or Firebase login
      this.props.navigation.navigate('Profile');

  }

}

const styles = StyleSheet.create({
wrapper:{
    flex: 1,
},
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40,
},
subheader: {
    fontSize: 14,
    marginBottom: 40,
    color: '#fff',
    fontWeight: 'bold',
},

header: {
    fontSize: 24,
    //marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
},
textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
},
btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
}



});

