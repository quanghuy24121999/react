import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import ProductListItem from '../components/ProductListItem';
import Apple1 from '../assets/safari.png';
import Android1 from '../assets/android.png';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Apple 1',
          image: Apple1,
          price: '3000000'
        },
        {
          id: 2,
          name: 'Apple 2',
          image: Apple1,
          price: '5000000'
        }
      ]
    }
  }

  render() {
    const { products } = this.state;
    return (  
      <FlatList 
        data={products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({ item }) => 
          <View style={styles.wrapper}>
            <ProductListItem product={item} />
          </View>
        }
        keyExtractor={(item) => `${item.id}`}  
      />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 8
  }
});
