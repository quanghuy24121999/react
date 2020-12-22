import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Axios from 'axios';

import ShoppingStackNavigator from './stackNavigator/ShoppingStackNavigator';
import CartStack from './stackNavigator/CartStackNavigator';
import OrdersStack from './stackNavigator/OrdersStackNavigator';
import SettingStack from './stackNavigator/SettingStackNavigator';
import { CartProvider, CartContext } from './context/CartContext';

const Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (  
      <CartProvider>
        <CartContext.Consumer>
          {({ quantity }) => (
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
    
                    if (route.name === 'Home') {
                      iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Cart') {
                      iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Orders') {
                      iconName = focused ? 'file-tray-stacked' : 'file-tray-stacked-outline';
                    } else if (route.name === 'Setting') {
                      iconName = focused ? 'settings' : 'settings-outline';
                    }
    
                    return <Ionicons name={iconName} size={size} color={color} />;
                  }
                })}
    
                tabBarOptions={{
                  activeTintColor: '#026BF0',
                  inactiveTintColor: 'gray',
                }}
              >
                <Tab.Screen
                  name="Home"
                  component={ShoppingStackNavigator}
                  options={{ title: 'Home' }}
                />
                <Tab.Screen 
                  name="Cart"
                  component={CartStack}
                  options={{ title: 'Cart', tabBarBadge: quantity}} 
                />
                <Tab.Screen 
                  name="Orders"
                  component={OrdersStack} 
                  options={{ title: 'Orders' }}
                />
                <Tab.Screen 
                  name="Setting"
                  component={SettingStack} 
                  options={{ title: 'Setting' }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          )}
        </CartContext.Consumer>
      </CartProvider>
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
