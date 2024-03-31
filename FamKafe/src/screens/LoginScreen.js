import { Text, View } from "react-native"
import styled from "styled-components";
import Logo from "../../public/images/logo.png"
import { Context } from "../../helpers/context/context";
import { useContext } from "react";

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

    const {setIsUserLogged} = useContext(Context)

    async function googleLogIn(){
        await setIsUserLogged(true)
    }

    async function guestLogIn(){
        await setIsUserLogged(false)
    }

    return( 
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
            <LogoImage source={Logo}/>
            <PageContainer>
                <GoogleButton onPress={googleLogIn}> 
                    <Text> Log in with google </Text> 
                </GoogleButton>
                <GoogleButton onPress={guestLogIn}> 
                    <Text> Log in as Guest </Text> 
                </GoogleButton>
            </PageContainer>
        </View>
    )
}

export default LoginScreen;