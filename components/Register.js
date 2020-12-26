import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import { firebaseApp } from './FirebaseConfig';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.register = this.register.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
    }

    gotoLogin() { 
        const { navigation } = this.props;
        navigation.navigate('Login');
    }

    register() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Alert.alert(
                'Register Successful',
                this.state.email,
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => this.gotoLogin() }
                ]
            )
        })
        .catch((error) => {
            Alert.alert('Register Fail !');
        });
    }

    render() {
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
                    <Text style={ styles.register }
                        onPress={ () => this.register() }
                    >
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
    register: {
        fontSize: 25,
        padding: 10,
        backgroundColor: 'green',
        color: 'white'
    }

})