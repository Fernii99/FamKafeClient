import { Text, View } from "react-native"
import styled from "styled-components";
import Logo from "../../public/images/logo.png"
import { Context } from "../../helpers/context/context";
import { useContext } from "react";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


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
    GoogleSignin.configure({
        webClientId: '811480831851-ic2jfgl63lucfv9kcokchc9d94pati55.apps.googleusercontent.com',
        });
    
    async function onGoogleButtonPress() {
        try{
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
            console.log("idToken")
            console.log(idToken)

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            console.log("googleCredential")
            console.log(googleCredential)

            // Sign-in the user with the credential
            const signInWithCredential =  auth().signInWithCredential(googleCredential);
            console.log("signInWithCredential")
            console.log(signInWithCredential)

            const idTokenResult = await auth().currentUser.getIdTokenResult();
            console.log("idTokenResult")
            console.log(idTokenResult)
        }
        catch (error){
            console.log(error)

        }
        
      }

    

    return( 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <LogoImage source={Logo}/>
            <PageContainer>
                <GoogleButton onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}> 
                    <Text> Log in with google </Text> 
                </GoogleButton>
                {/* <GoogleButton onPress={guestLogIn}> 
                    <Text> Log in as Guest </Text> 
                </GoogleButton> */}
            </PageContainer>
        </View>
    )
}

export default LoginScreen;

// const {setIsUserLogged} = useContext(Context)

//     async function googleLogIn(){
//         await setIsUserLogged(true)
//     }

//     async function guestLogIn(){
//         await setIsUserLogged(false)
//     }