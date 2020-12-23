import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../screens/Cart';  

const Stack = createStackNavigator();

export default function CartStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Cart" 
              component={Cart}
              options={{ title: 'Cart' }} 
            />
        </Stack.Navigator>
    );
}