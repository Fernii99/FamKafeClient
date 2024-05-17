
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/ProductsScreen.js';
import ProfilePage from '../screens/ProfilePage.js';
import { ImageBackground } from 'react-native';
import CartScreen from '../screens/CartScreen.js';




const Tab = createBottomTabNavigator();

export default MortimerNavigation = () =>{
    return (
    <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    height: 50,
                    backgroundColor: 'transparent',
                    borderColor:'#0C0F14'
                },
                
                }}>
        <Tab.Screen name="ProfilePage" 
            component={ProfilePage} 
            options={{
                tabBarItemStyle: {
                    TabBarLabel: 'none',
                    height: 50,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#D17842',
                tabBarIcon:({ color }) => (
                    <ImageBackground source={{uri:"https://firebasestorage.googleapis.com/v0/b/charactercraft-c74c9.appspot.com/o/navigation%2FmapNavigationIcon(2).png?alt=media&token=621f0bf1-3f58-41a1-ac49-3653a020988f"}} style={{height:60, width: 60, }}></ImageBackground>
                )}}

        />
        <Tab.Screen  name="HomePage" 
            component={HomePage} 
            options={{
                tabBarItemStyle: {
                    tabBarLabel: false,
                    height: 50,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#D17842',
                tabBarIcon:({color}) => (
                    <ImageBackground source={{uri:"https://firebasestorage.googleapis.com/v0/b/charactercraft-c74c9.appspot.com/o/navigation%2Fprofile.png?alt=media&token=6b87034c-2c80-44d1-8b53-5d4c1b899b39"}} style={{height:60, width: 60, }}></ImageBackground>

                  ), 
            }
        }
        />
        <Tab.Screen  name="CartScreen" 
            component={CartScreen} 
            options={{
                tabBarItemStyle: {
                    tabBarLabel: false,
                    height: 50,
                },     
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#D17842',
                tabBarIcon:({color}) => (
                    <ImageBackground source={{uri:"https://firebasestorage.googleapis.com/v0/b/charactercraft-c74c9.appspot.com/o/navigation%2Fprofile.png?alt=media&token=6b87034c-2c80-44d1-8b53-5d4c1b899b39"}} style={{height:60, width: 60, }}></ImageBackground>

                  ), 
            }
        }
        />
    </Tab.Navigator>
    


    )
}