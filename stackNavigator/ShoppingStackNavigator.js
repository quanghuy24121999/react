import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from '../screens/Category';  
import Categories from '../screens/Categories';

const Stack = createStackNavigator();

export default function ShoppingStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Categories" 
              component={Categories}
              options={{ title: 'Categories' }} 
            />
            <Stack.Screen 
              name="Category" 
              component={Category} 
              options={({ route }) => ({ title: route.params.categoryName })}
            />
        </Stack.Navigator>
    );
}