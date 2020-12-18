import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CartListItem(props) {
    const { product, add, sub } = props;
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
                <Ionicons style={ styles.subIcon } name='remove-circle' size={25} onPress={() => add}/>
                <Text style={ styles.productQuantity }>{ product.quantity }</Text>
                <Ionicons style={ styles.addIcon } name='add-circle' size={25} onPress={() => sub} />
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
        padding: 5,
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
    },
    addIcon: {
        marginLeft: 15
    },
    subIcon: { 
        marginLeft: 15,
        marginRight: 10   
    }, 
    productQuantity: {
        fontSize: 20
    }
})