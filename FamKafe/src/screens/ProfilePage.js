import styled from "styled-components";
import { Context } from "../../helpers/context/context";
import { useContext, useEffect, useState } from "react";
import { getUserData } from "../helpers/asyncStorageUser";

const ProfileContainer = styled.View`
background-color: #0C0F14;
    display: flex;
    flex: 1;
    align-items: center;
`

const NameContainer = styled.View`
    width: 100%;
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
`

const CloseProfileButton = styled.TouchableOpacity`
    display: inline-block;
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    display: block;
`

const ProfilePictureBadgesContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const ProfileBadgesContainer = styled.View`
    padding-left:3%;
    width: 100%;
`
const ProfilePictureContainer = styled.View`
    display:flex; 
    align-items:center;
    width: 50%;
`

const ProfilePicture = styled.Image`
    height: 190px;
    width: 190px;
    border-radius: 150px;
`

const ProfileText = styled.Text`
    font-size: 25px;
    margin-top:3%;
    margin-bottom:3%;
    color: gray;
`

const ProfilePage = () =>{

    const { profileData } = useContext(Context);

    useEffect(() => {
        console.log(profileData)
    })

    return(
        <ProfileContainer>
            <NameContainer>
            <ProfileText> {profileData.name} </ProfileText>
            </NameContainer>
            <ProfilePictureBadgesContainer>
            <ProfilePictureContainer>
                    <ProfilePicture source={{uri: profileData.image }} />
                </ProfilePictureContainer>
            </ProfilePictureBadgesContainer>
            <ProfileBadgesContainer>
                <ProfileText>Pedidos realizados </ProfileText>
                <ProfileText>{profileData.email}</ProfileText>

                </ProfileBadgesContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;