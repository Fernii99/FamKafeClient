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


function App(){

  const [userLogged, setUserLogged ] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const [filterValue, setFilterValue ] = useState("")
  const [allProducts, setAllProducts] = useState("")

  useEffect(() => {
    console.log("initial load of the app")
    userDataSaved();
    
  }, [])

  const userDataSaved = async () =>{
    const userData = await getUserData();

    if(userData === null){
      loginVisible(true)
    }
    else{
      setLoginVisible(false)
      const productsList = await getProducts()
      console.log(productsList);
      setAllProducts(productsList);
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
      <Context.Provider value={{ userLogged, setUserLogged, setLoginVisible, filterValue, setFilterValue, setAllProducts, allProducts, }}>
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
