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


function App(){

  const [isUserLogged, setIsUserLogged] = useState(false);

  const [globalState, setGlobalState] = useState([]);

  const globalStateHandler = (data) =>{
    setGlobalState( globalState => ({
      ...globalState,
      ...data
    }));
}

  useEffect( ()=> {

  }, [isUserLogged] )

  return (
    <SafeAreaView style={{backgroundColor:'#0C0F14', flex:1}}> 
      <Context.Provider value={{globalState, setGlobalState, isUserLogged, setIsUserLogged}}>
      
        {isUserLogged ? <HomePage /> : <LoginScreen/> }
      </Context.Provider>
      
    </SafeAreaView>

  );
}

export default App;
