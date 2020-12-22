import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import CategoryListItem from '../components/CategoryListItem';
import { getCategories } from '../api/Server';

export default class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({
        categories: categories
      })
    })
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (  
        <FlatList data={categories}
            renderItem={({ item }) => 
                <CategoryListItem 
                    category={item}
                    onPress={() => navigation.navigate('Category', {
                        categoryName: item.name,
                        categoryId: item.id
                    })}
                />}
            keyExtractor={(item) => `${item.id}`}  
            contentContainerStyle={styles.container}
        />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16, 
    paddingRight: 16,
    paddingTop: 16
  },
});
