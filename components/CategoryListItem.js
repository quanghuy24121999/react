import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import SampleImage from '../assets/apple.png';

export default function CategoryListItem(props) {
    const { category, onPress } = props;
    return (
      <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={onPress}
      >
        <View style={style.container}>
            <Text style={style.categoryTitle}>{category.name}</Text>
            <Image style={style.categoryImage} source={SampleImage}/>
        </View>  
      </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '400'
    },
    container: {
        alignItems: 'center',
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 20
    }
})