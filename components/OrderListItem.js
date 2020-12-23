import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OrderListItem(props){
    const { product } = props;
    return (
        <View style={ styles.container }>
        <View style={ styles.info }>
            <Image style={styles.image} source={{ uri: product.image }}/>
            <View style={ styles.detail }>
                <Text style={ styles.productName }>{ product.name }</Text>
                <Text style={ styles.productPrice }>{ product.price }</Text>
            </View>
        </View>
        <View style={ styles.rawQuantity }>
            <Text style={ styles.productQuantity }>{ product.quantity }</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 20,
        flexDirection: 'row',
    },
    info: {
        flexDirection: 'row',
        flex: 3
    },
    detail: {
        padding: 15,
        justifyContent: 'center'
    },
    productName: {
        fontSize: 20
    },
    productPrice: {
        paddingTop: 10,
        color: 'red'
    },
    rawQuantity: {
        borderLeftColor: '#D6DBDF',
        borderLeftWidth: 2,
        borderRightColor: '#D6DBDF',
        borderRightWidth: 2,
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
    },
    productQuantity: {
        fontSize: 20
    }
})