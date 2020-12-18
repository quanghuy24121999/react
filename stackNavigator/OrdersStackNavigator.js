import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Orders from '../screens/Orders';  

const Stack = createStackNavigator();

export default function OrdersStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Orders" 
              component={Orders}
              options={{ title: 'Orders' }} 
            />
        </Stack.Navigator>
    );
}