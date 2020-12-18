import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Axios from 'axios';

import ProductListItem from '../components/ProductListItem';

export default class Category extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: []
    }
  }
  
  componentDidMount() {
    const { route } = this.props;
    const { categoryId } = route.params;
    
    Axios.get('/products?category=' + categoryId)
      .then(res => {
        this.setState({
          products: res.data
        })
      })
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
            <ProductListItem product={item}/>
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
