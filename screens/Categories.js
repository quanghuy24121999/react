import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import CategoryListItem from '../components/CategoryListItem';

export default class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Adroid' },
        { id: 3, name: 'Windows' }
      ]
    }
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
                        categoryName: item.name
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
