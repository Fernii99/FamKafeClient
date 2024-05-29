
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/ProductsScreen.js';
import ProfilePage from '../screens/ProfilePage.js';
import { ImageBackground, Text, View } from 'react-native';
import CartScreen from '../screens/CartScreen.js';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

import PendingOrders from '../screens/PendingOrders.js';


import { Context } from '../../helpers/context/context.js';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();

const CartIcon = styled.View`
    padding-top: 15px;
`

const OrderAmount = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    top:-10px;
    right: -10px;
    z-index: 3;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: ${(props => props.amount != 0 ? '#D17842' : "blue" )};
    border: 2px solid;
    border-color: #000;
`
const AmountText = styled.Text`
    font-size: 10px;
    color: white;
`



export default BottomNavigationClient = () =>{
    const {actualOrder, profileData} = useContext(Context)

    useEffect(() => {
       
    }, [actualOrder])

    return (
    <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    height: 35,
                    backgroundColor: 'transparent',
                    borderColor:'#0C0F14'
                },
                
                }}>
            <Tab.Screen  name="HomePage" 
                component={HomePage} 
                options={{
                    tabBarItemStyle: {
                        tabBarLabel: false,
                        height: 70,
                    },     
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#D17842',
                    tabBarIcon: ({color}) => { return (
                        
                    <Icon name="list" size={35} color={color} />)}
                }}
            />
            <Tab.Screen  name="Profile" 
                component={ProfilePage} 
                options={{
                    tabBarItemStyle: {
                        tabBarLabel: false,
                        height: 70,
                    },     
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#D17842',
                    tabBarIcon: ({color}) => { return (
                        
                    <Icon name="person" size={35} color={color} />)}
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
                        <>
                            <CartIcon>
                                <Icon name="cart-outline" size={30} color={color}/>
                            </CartIcon>
                            <OrderAmount>
                                <AmountText amount={actualOrder.amount}>{actualOrder.length}</AmountText></OrderAmount>
                        </>
                    ), 
                }}
            />

    </Tab.Navigator>
    


    )
}