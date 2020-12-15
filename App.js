import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from './screens/Category';
import Categories from './screens/Categories';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (  
      <NavigationContainer>
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
    </NavigationContainer>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
