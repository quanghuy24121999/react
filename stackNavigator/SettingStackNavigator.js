import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Setting from '../screens/Setting';  

const Stack = createStackNavigator();

export default function SettingStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Setting" 
              component={Setting}
              options={{ title: 'Setting' }} 
            />
        </Stack.Navigator>
    );
}