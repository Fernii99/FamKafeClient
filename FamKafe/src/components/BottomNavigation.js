
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/ProductsScreen.js';
import ProfilePage from '../screens/ProfilePage.js';
import { ImageBackground } from 'react-native';
import CartScreen from '../screens/CartScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

export default MortimerNavigation = () =>{
    return (
    <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    height: 35,
                    backgroundColor: 'transparent',
                    borderColor:'#0C0F14'
                },
                
                }}>
        <Tab.Screen name="ProfilePage" 
            component={ProfilePage} 
            options={{
                tabBarItemStyle: {
                    TabBarLabel: 'none',
                    height: 70,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#D17842',
                tabBarIcon: ({color}) => { return (
                    
                    <Icon name="person" size={30} color={color} />)}
                }}
        />
        <Tab.Screen  name="HomePage" 
            component={HomePage} 
            options={{
                tabBarItemStyle: {
                    tabBarLabel: false,
                    height: 70,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'orange',
                tabBarIcon: ({color}) => { return (
                    
                <Icon name="list" size={35} color={color} />)}
            }}
        />
        <Tab.Screen  name="CartScreen" 
            component={CartScreen} 
            options={{
                tabBarItemStyle: {
                    tabBarLabel: false,
                    height: 70,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#D17842',
                tabBarIcon:({color}) => (
                    <Icon name="bag" size={30} color={color} />
                  ), 
            }
        }
        />
    </Tab.Navigator>
    


    )
}