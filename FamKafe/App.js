import React, { useEffect, useState } from 'react';
import { SafeAreaView, Modal, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Context } from './helpers/context/context';
import { getUserData, storeUserData, removeUserData } from './src/helpers/asyncStorageUser';

import LoginScreen from './src/screens/LoginScreen'

import getProducts from './src/helpers/axios/getAllProducts';
import getAllOrders from './src/helpers/axios/getAllOrders';
import getProfileOrders from './src/helpers/axios/getProfileOrders';

import getPendingOrders from './src/helpers/axios/getPendingOrders';

import BootSplash from "react-native-bootsplash";
import BottomNavigation from './src/components/BottomNavigation';

function App(){

  const [isLogged, setLogged] = useState(false);
  const [userLogged, setUserLogged ] = useState(false);
  const [loginVisible, setLoginVisible] = useState(true);
  const [filterValue, setFilterValue ] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [allProducts, setAllProducts] = useState("");
  const [actualOrder, setActualOrder] = useState([]);
  const [allOrders, setAllOrders] = useState("");
  const [usersOrders, setUsersOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    
      const init = async () => {
      };
  
      init().finally(async () => {
        console.log("Loading...")
        await manageSession();
        await BootSplash.hide({ fade: true });
        console.log("BootSplash has been hidden successfully");
      });
    
  }, [])

  const manageSession = async () =>{
    userData = await getUserData();
    if(userData === null){
      await setLoginVisible(true)
    }
    else{
     setLogged(true)
    }
  }

  useEffect( () => {

    const manageLoggedLogin = async ()=>{
      const localUserData = await getUserData();
      await setProfileData(localUserData);
<<<<<<< HEAD
      await storeUserData(localUserData);
=======
>>>>>>> PendingOrders
    }

    const loadProducts = async () => {
      const productsData = await getProducts();
      await setAllProducts(productsData);
    }

<<<<<<< HEAD
    const loadUserOrders = async () => {
      console.log("LoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERS")
      console.log(profileData)
      console.log("LoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERSLoadUSERORDERS")
      const usersOrders = await getProfileOrders(profileData[0]._id);
      await setUsersOrders(usersOrders);
    }


=======
>>>>>>> PendingOrders
    const loadPendingOrders = async () => {
      const retrievedPendingOrders = await getPendingOrders();
      await setPendingOrders(retrievedPendingOrders);
    }

<<<<<<< HEAD
    const load = async()=>{
=======
    const loadUserOrders = async () => {
      const localUserData = await getUserData();
      const usersOrders = await getProfileOrders(localUserData[0]._id);
      await setUsersOrders(usersOrders);
    }

    const load = async ()=>{
>>>>>>> PendingOrders

      await manageLoggedLogin();
      await loadProducts();
      await loadUserOrders();
      await loadPendingOrders();
      
    }
  
    if(isLogged){
      load();
      setLoginVisible(false);
    }

    

  }, [isLogged]) 


  useEffect(() => {
      
  },[profileData])



  return (
    <SafeAreaView style={{backgroundColor:'#0C0F14', flex:1}}>
      <Context.Provider value={{ isLogged, setLogged, setLoginVisible, filterValue, setFilterValue, setProfileData, setAllProducts, allProducts, actualOrder, setActualOrder, profileData, allOrders, usersOrders, setUsersOrders, pendingOrders, setPendingOrders }}>
          <Modal
            visible={loginVisible}
          >
            <LoginScreen/>
          </Modal>
          {
            profileData === null ? 
             null
            :
            <NavigationContainer>
              <BottomNavigation/>
            </NavigationContainer>
          }
          
      </Context.Provider>
    </SafeAreaView>
  );
}

export default App;




