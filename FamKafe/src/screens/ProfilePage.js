import { View, Text, Image } from "react-native"
import styled from "styled-components";
import { Context } from "../../helpers/context/context";
import { useContext } from "react";

const ProfileContainer = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
`

const ProfilePictureContainerBadges = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`
const ProfileBadgesContainer = styled.View`
display: flex;
   width: 50%;
   background-color: green;
`
const ProfilePictureContainer = styled.View`
display: flex;
   width: 40%;
   background-color: green;
`

const ProfilePicture = styled.Image`
    height: 125px;
    width: 125px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 150px;
`

const ProfileText = styled.Text`
    font-size: 20px;
    color: white;
`

const ProfilePage = () =>{

    const { userData } = useContext(Context);
    console.log(userData)

    return(
        <ProfileContainer>
            <ProfileText> {userData.name} </ProfileText>
            <ProfilePictureContainerBadges>
                <ProfilePictureContainer>
                    <ProfilePicture source={{uri: userData.picture }} />
                </ProfilePictureContainer>
                <ProfileBadgesContainer>
                <Text>Pedidos realizados </Text>

                </ProfileBadgesContainer>
                <Text>Nombre: {userData.name}</Text>
                <Text>Email: {userData.email}</Text>


            </ProfilePictureContainerBadges>
        </ProfileContainer>
    )
}

export default ProfilePage;