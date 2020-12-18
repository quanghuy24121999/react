import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { CartContext } from '../context/CartContext';

export default function ProductListItem(props) {
    const { product } = props;

    return (
        <View style={styles.shadow}> 
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.image }}/>
                <View>
                    <Text style={styles.name}>{ product.name }</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{ product.price }</Text>
                            <CartContext.Consumer>
                                {({ addToCart }) => (
                                    <TouchableOpacity>
                                        <Text style={styles.cart} onPress={() => addToCart(product)}>
                                            MUA + 
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            </CartContext.Consumer>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    container: {
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        padding: 15,
        marginTop: 10
    },
    name: {
        fontSize: 15,
        padding: 5
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent:'space-between'
    }, 
    price: {
        fontSize: 15,
        color: 'red'
    },
    cart: {
        fontSize: 15,
        color: 'blue'
    }  
})