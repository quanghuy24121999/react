import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import { firebaseApp } from './FirebaseConfig';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.gotoHome = this.gotoHome.bind(this);
        this.login = this.login.bind(this);
    }

    gotoHome() {
        const { navigation } = this.props;
        navigation.navigate('Home');
    }

    login() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Alert.alert(
                'Login Successful !',
                this.state.email,
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => this.gotoHome() }
                ]
            )
        })
        .catch((error) => {
            Alert.alert('Login Fail !');
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={ styles.container }>
                <View style={ styles.input }>
                    <TextInput style={ styles.email }
                        placeholder='Email'
                        onChangeText={(email) => this.setState({
                            email: email
                        })}
                        value={ this.state.email }
                    />
                    <TextInput style={ styles.password }
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({
                            password: password
                        })}
                        value={ this.state.password }
                    />
                </View>
                <View style={ styles.task }>
                    <Text style={ styles.login } onPress={ () => this.login() } >Login</Text>
                    <Text style={ styles.register } onPress={ () => navigation.navigate('Register') }>
                        Register
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        padding: 20
    },
    email: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20, 
        fontSize: 20,
        padding: 10
    },
    password: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20, 
        fontSize: 20,
        padding: 10
    },
    task: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    login: {
        fontSize: 25,
        padding: 10,
        color: 'green'
    },
    register: {
        fontSize: 25,
        padding: 10
    }

})