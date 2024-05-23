import React, { useEffect, useState } from 'react';
import { SafeAreaView, Modal, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from './src/components/BottomNavigation';

import { Context } from './helpers/context/context';
import { getUserData, storeUserData, removeUserData } from './src/helpers/asyncStorageUser';

import LoginScreen from './src/screens/LoginScreen'
import HomePage from './src/screens/ProductsScreen';
import ProfilePage from './src/screens/ProfilePage';
import ProductScreen from './src/screens/ProductScreen';
import getProducts from './src/helpers/axios/getAllProducts';
import getAllOrders from './src/helpers/axios/getAllOrders';
import getProfileOrders from './src/helpers/axios/getProfileOrders';


function App(){

  const [userLogged, setUserLogged ] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const [filterValue, setFilterValue ] = useState("");
  const [profileData, setProfileData] = useState("");
  const [allProducts, setAllProducts] = useState("");
  const [actualOrder, setActualOrder] = useState([]);
  const [allOrders, setAllOrders] = useState("");
  const [usersOrders, setUsersOrders] = useState("");

  useEffect(() => {
    console.log("initial load of the app")
    userDataSaved();
  }, [])

  const userDataSaved = async () =>{
    const userData = await getUserData();
    const allOrders = await getAllOrders();
    const userOrders = await getProfileOrders(userData._id);
    
    setAllOrders(allOrders);

    if(userData === null){
      loginVisible(true)
    }
    else{
      setLoginVisible(false)
      const productsList = await getProducts()
      setProfileData(userData);
      setAllProducts(productsList);
      setAllOrders(allOrders);
      setUsersOrders(userOrders)
    }
  }

  const globalStateHandler = (data) =>{
    setGlobalState( globalState => ({
      ...globalState,
      ...data
    }));
  }


  return (
    <SafeAreaView style={{backgroundColor:'#0C0F14', flex:1}}>
      <Context.Provider value={{ userLogged, setUserLogged, setLoginVisible, filterValue, setFilterValue, setAllProducts, allProducts, actualOrder, setActualOrder, profileData, allOrders, usersOrders, setUsersOrders }}>
        <View style={{position: "relative", top: 0, left: 0, width: '100%', height: 50, backgroundColor: 'transparent'}}>
        </View>
          <Modal
            visible={loginVisible}
          >
            <LoginScreen/>
          </Modal>
          <NavigationContainer>
            <BottomNavigation />
          </NavigationContainer>
      </Context.Provider>
    </SafeAreaView>
  );
}

export default App;
