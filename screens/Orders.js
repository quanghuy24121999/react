import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

import OrderListItem from '../components/OrderListItem';
import { getAllOrders, getOrderById } from '../api/Server';

export default class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        getAllOrders().then(orders => {
            this.setState({
                orders: orders
            })
        })
        
    }

    render() {
        const orders = this.state.orders;
        return (
            <View>
                <SectionList
                    contentContainerStyle={styles.container}
                    sections={ orders }
                    renderItem={({ item }) => (
                        <OrderListItem product={ item }/>
                    )}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.title}>Order { section.title }</Text>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    title: {
        fontSize: 20,
        padding: 10,
        color: '#fff',
        backgroundColor: '#0f50ba'
    }
});