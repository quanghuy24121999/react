import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, RefreshControl } from 'react-native';

import OrderListItem from '../components/OrderListItem';
import { getAllOrders } from '../api/Server';

export default class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            orders: []
        }

        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.setState({
            refreshing: true
        })
        getAllOrders().then(orders => {
            this.setState({
                orders: orders
            })
            this.setState({
                refreshing: false
            })
        })
    }

    componentDidMount() {
        this.refresh();
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
                    keyExtractor={(item, index) => index}
                    refreshControl={
                        <RefreshControl
                            refreshing={ this.state.refreshing }
                            onRefresh={() => this.refresh()}
                        />
                    }
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