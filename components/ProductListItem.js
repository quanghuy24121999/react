import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductListItem(props) {
    const { product, addToCart } = props;

    return (
        <View style={styles.shadow}> 
            <View style={styles.container}>
                <Image style={styles.image} source={ product.image }/>
                <View>
                    <Text style={styles.name}>{ product.name }</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{ product.price }</Text>
                        <TouchableOpacity>
                            <Text style={styles.addToCart}>MUA + </Text>
                        </TouchableOpacity>
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
    addToCart: {
        fontSize: 15,
        color: 'blue'
    }  
})