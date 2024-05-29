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

    const { setLogged, setLoginVisible, setProfileData } = useContext(Context)

    GoogleSignin.configure({
        webClientId: '811480831851-ic2jfgl63lucfv9kcokchc9d94pati55.apps.googleusercontent.com',
        });
    
    async function onGoogleButtonPress() {
        try{
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            console.log("PLAY SERVICES CHECKED");

            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            console.log(`**************************************************************************`)
            console.log(`ID TOKEN`)
            console.log(`--------`)
            console.log(idToken)

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            console.log(`**************************************************************************`)
            console.log(`GOOGLECREDENTIAL`)
            console.log(`----------------`)
            console.log(googleCredential);
            console.log(`**************************************************************************`)

            const signInWithCredential = await auth().signInWithCredential(googleCredential);
  
            console.log("SIGNINWITHCREDENTIAL")
            console.log(signInWithCredential);


            // Sign-in the user with the credential
            const idTokenResult = await auth().currentUser.getIdTokenResult();
            console.log("IDtokenresult FISRT TIME ON GOOGLE CLICK")
            console.log(idTokenResult)


            await axios.post("http://localhost:3000/users/login", {
                "idToken": idTokenResult.token
            })
            .then( async function (response) {
                const profileInformation = response.data.data;
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log(profileInformation)
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")
                console.log("profileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileDataprofileData")

                await setProfileData(profileInformation);
                await storeUserData(profileInformation);  
                setModal(profileInformation);
                setLogged(true)
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
      
      async function setModal(data){

        if(data != null){
          setLoginVisible(false);
        };
    
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
