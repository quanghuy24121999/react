import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import CartListItem from '../components/CartListItem';
import { CartContext } from '../context/CartContext';
import { addToOrder } from "../api/Server";
export default class Cart extends Component {
    constructor(props) {
        super(props);

    }
        
    render() {
        return (
            <CartContext.Consumer>
                {({ cartItems, total, emptyCart }) => ( 
                    <View style={styles.component}>
                        <FlatList 
                        data={ cartItems }
                        contentContainerStyle={styles.container}
                        renderItem={({ item }) => 
                        <View style={styles.wrapper}>
                            <CartListItem product={item} />
                        </View>
                        }
                        keyExtractor={(item) => `${item.id}`}  
                    />
                        <View style={ styles.totalRow }>
                            <Text style={ styles.total }>
                                Total: { total } VND
                            </Text>
                            <Button
                                title='Checkout'
                                type='solid'
                                onPress={() => {
                                    addToOrder(cartItems);
                                    emptyCart();
                                }}
                            />
                        </View>
                    </View>
                )}
            </CartContext.Consumer>    
        )}
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        marginTop: 16,
        paddingHorizontal: 8
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5
    },
    total: {
        fontSize: 24,
        color: 'red',
        alignSelf: 'center'
    }
});