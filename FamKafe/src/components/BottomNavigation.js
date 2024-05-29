import React, { useContext, useEffect } from 'react';
import BottomNavigationAdmin from './BottomNavigationAdmin';
import BottomNavigationClient from './BottomNavigationClient';
import { Context } from '../../helpers/context/context';


export default function BottomNavigation(){

    const {profileData} = useContext(Context);
    
    if(profileData[0].email === "asierfc@gmail.com" ){
        return <BottomNavigationAdmin />
    }
    else{
        return <BottomNavigationClient />
    }
}