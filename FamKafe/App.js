import React, { useEffect, useState } from 'react';
import { SafeAreaView, Modal, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from './src/components/BottomNavigation';

import { Context } from './helpers/context/context';
import { getUserData, storeUserData, removeUserData } from './src/helpers/asyncStorageUser';

import LoginScreen from './src/screens/LoginScreen'

import getProducts from './src/helpers/axios/getAllProducts';
import getAllOrders from './src/helpers/axios/getAllOrders';
import getProfileOrders from './src/helpers/axios/getProfileOrders';

import getPendingOrders from './src/helpers/axios/getPendingOrders';


function App(){

  const [userLogged, setUserLogged ] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const [filterValue, setFilterValue ] = useState("");
  const [profileData, setProfileData] = useState("");
  const [allProducts, setAllProducts] = useState("");
  const [actualOrder, setActualOrder] = useState([]);
  const [allOrders, setAllOrders] = useState("");
  const [usersOrders, setUsersOrders] = useState("");
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    console.log("initial load of the app")
    userDataSaved();
  }, [])

  const userDataSaved = async () =>{
    const userData = await getUserData();
    console.log("USERDATA ++++++++++++++++++++")
    console.log(userData)

    if(userData === null){
      await setLoginVisible(true)
    }
    else{
      await setProfileData(userData);
      console.log("userData")
      console.log(userData)

      const productsList = await getProducts();
      await setAllProducts(productsList);

      console.log("productsList 676767676767676767676767676776767676")
      console.log(productsList);


      const allOrders = await getAllOrders();
      await setAllOrders(allOrders);

      console.log("allOrders 98989898989898989898989898989")
      console.log(allOrders)
      console.log()
      const userOrders = await getProfileOrders(profileData._id);
      await setUsersOrders(userOrders);

      console.log("user ORDERS ç´ç´ç´ç´ç´ç´ç´çç´ç´ç´ç´ç´ç´ç´ç´ç´ç´ç´ç´")
      console.log(userOrders)
console.log()
      const retrievedPendingOrders = await getPendingOrders();
      await setPendingOrders(retrievedPendingOrders);
      console.log("RETRIEVED PENDING ORDERS FOR THE ADMIN -----------------------.-----------")
      console.log(pendingOrders);
      console.log()


      await setLoginVisible(false);
      
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
      <Context.Provider value={{ userLogged, setUserLogged, setLoginVisible, filterValue, setFilterValue, setAllProducts, allProducts, actualOrder, setActualOrder, profileData, allOrders, usersOrders, setUsersOrders, pendingOrders, setPendingOrders }}>
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
