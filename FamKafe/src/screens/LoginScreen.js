import { Text, View } from "react-native"
import styled from "styled-components";
import Logo from "../../public/images/logo.png"
import { Context } from "../../helpers/context/context";
import { useContext } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { storeUserData } from "../helpers/asyncStorageUser";



const PageContainer = styled.View`
    flex:1;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
`

const LogoImage = styled.Image`
    width:50%;
    height:50%;
    object-fit: contain;
`

const GoogleButton = styled.TouchableOpacity`
    display:flex;
    align-items: center;
    justify-content:center;
    width:70%;
    height:10%;
    border-radius: 20px;
    background-color: #D17842;
    margin-bottom: 3%;
`
   

function LoginScreen() {

    const { setLoginVisible } = useContext(Context)

    GoogleSignin.configure({
        webClientId: '811480831851-ic2jfgl63lucfv9kcokchc9d94pati55.apps.googleusercontent.com',
        });
    
    async function onGoogleButtonPress() {
        try{
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
            
            // Sign-in the user with the credential
            const idTokenResult = await auth().currentUser.getIdTokenResult(googleCredential);


            await axios.post("http://localhost:3000/users/login", {
                idToken: idTokenResult.token
            })
            .then( async function (response) {
                console.log("idTokenResult")
            console.log(idTokenResult)
                const profileData = response.data.data[0]
                await storeUserData(profileData);
                setLoginVisible(false)
            })
              .catch(function (error) {
                console.log("LOGIN CALL TO SERVER RESPONSE ON .CATCH")
                console.log(error);
              });
        }
        catch (error){
            console.log(error)
        }
      }
      
    return( 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <LogoImage source={Logo}/>
            <PageContainer>
                <GoogleButton onPress={() => onGoogleButtonPress()}> 
                    <Text> Log in with google </Text> 
                </GoogleButton>
            </PageContainer>
        </View>
    )
}

export default LoginScreen;
