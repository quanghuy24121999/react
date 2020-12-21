import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import CartListItem from '../components/CartListItem';
import { CartContext } from '../context/CartContext';

export default class Cart extends Component {
    constructor(props) {
        super(props);

    }
        
    render() {
        return (
            <CartContext.Consumer>
                {({ cartItems, total }) => (
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
                        </View>
                    </View>
                )}
            </CartContext.Consumer>    
        )}
}

const styles = StyleSheet.create({
    component: {
        flex: 1
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
        marginBottom: 10,
        marginLeft: 20
    },
    total: {
        fontSize: 24,
        color: 'red'
    }
});