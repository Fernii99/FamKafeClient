/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView} from 'react-native';
import LoginScreen from './src/screens/LoginScreen'
import HomePage from './src/screens/HomePage';

import { Context } from './helpers/context/context';
import ProfilePage from './src/screens/ProfilePage';


function App(){

  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [userData, setUserData] = useState("null");
  const [globalState, setGlobalState] = useState([]);


  const globalStateHandler = (data) =>{
    setGlobalState( globalState => ({
      ...globalState,
      ...data
    }));
  }

  useEffect( ()=> {

  }, [isUserLogged, userData] )

  return (
    <SafeAreaView style={{backgroundColor:'#0C0F14', flex:1}}> 
      <Context.Provider value={{globalState, setGlobalState, isUserLogged, setIsUserLogged, setUserData, userData, setIsProfileComplete}}>
        {isUserLogged && isProfileComplete ? <HomePage /> : (isUserLogged && !isProfileComplete ? <ProfilePage /> : <LoginScreen /> )}
      </Context.Provider>
      
    </SafeAreaView>

  );
}

export default App;
