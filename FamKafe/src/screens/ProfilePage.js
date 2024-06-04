import styled from "styled-components";
import { Context } from "../../helpers/context/context";
import { useContext, useEffect, useState } from "react";
import { Text, ScrollView, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

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
`


const ProfilePictureBadgesContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const ProfileBadgesContainer = styled.View`
    display: flex;
    flex: 1;
    padding-left:3%;
    width: 100%;
`
const ProfilePictureContainer = styled.View`
    display:flex;
    width: 90%;
`

const ProfilePicture = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 150px;
`

const ProfileText = styled.Text`
    font-size: 25px;
    margin-top:3%;
    margin-bottom:3%;
    color: gray;
`

const OrderContainer = styled.View`
    width: 95%;
    display: flex;
    flex-direction: flex;
`
const DateTotalContainer = styled.View`
margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`

const OrderInfoTextWhite = styled.Text`
    color: white;
    font-size: 15px;
    width: 100px; 
`
const OrderInfoTextRed = styled.Text`
    color: #ba3a30;
    font-size: 15px;
    width: 100px; 
    text-align: right;
    padding-right: 10px;
`

const OrderProductInformation = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const OrderProductText = styled.Text`
    font-size: 12px;
    color: white;
`

const ProductImageContainer = styled.View`
    width: 90px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
`

const ProductImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

const ProductTextsContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex: 1;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    align-items: center;
    justify-content: space-around;
`

const ProductText = styled.Text`
    text-align: center;
    border-radius: 10px;
    color: white;
    width: 31%;
    flex-wrap: wrap;
`

const NoOrdersMessage = styled.Text` 
font-size: 25px;
color: white;
`




const ProfilePage = () =>{

    const { profileData, usersOrders } = useContext(Context);
<<<<<<< HEAD
=======
    
    useEffect(()=>{
        console.log("+`+`+``+`+`+`+`+`+`+`+`+`+`+`++`+`+`+`++`+`+`+`+`+`+`+`+`+`+")
        console.log("+`+`+``+`+`+`+`+`+`+`+`+`+`+`++`+`+`+`++`+`+`+`+`+`+`+`+`+`+")
        console.log(usersOrders.length)
        console.log("+`+`+``+`+`+`+`+`+`+`+`+`+`+`++`+`+`+`++`+`+`+`+`+`+`+`+`+`+")
        console.log("+`+`+``+`+`+`+`+`+`+`+`+`+`+`++`+`+`+`++`+`+`+`+`+`+`+`+`+`+")
    }, [])

>>>>>>> PendingOrders

    return(
        <ProfileContainer>
            <NameContainer>
<<<<<<< HEAD
            <ProfileText> {profileData[0].name} </ProfileText>
=======
            <ProfileText> {profileData[0].email} </ProfileText>
>>>>>>> PendingOrders
            </NameContainer>
            <ProfilePictureBadgesContainer>
            <ProfilePictureContainer>
                    <ProfilePicture source={{uri: profileData[0].image }} />
                </ProfilePictureContainer>
            </ProfilePictureBadgesContainer>
            <ProfileBadgesContainer>
                <ProfileText>Pedidos realizados: </ProfileText>
                <ScrollView style={{display: 'flex', flex: 1, width: '100%' }}>
                    {
<<<<<<< HEAD
                        usersOrders.length != 0 ? 
=======
                        usersOrders.length != [] ? 
>>>>>>> PendingOrders
                        <>
                        {usersOrders.data.map((item) => {
                            return(
                                <OrderContainer key={item._id}>
                                    
                                    
                                    <LinearGradient  colors={['rgba(255, 255, 255, 0.1)', 'rgba(12, 15, 20, 0.1)']}  start={{ x: 1, y: 0 }} end={{ x: 0.2, y: 0.9 }} style={{ width: '100%', marginBottom: '7%', paddingHorizontal:12, borderRadius: 10 }} >
                                    <DateTotalContainer>
                                        <OrderInfoTextWhite>
                                            Order Date {item.orderDate}
                                        </OrderInfoTextWhite>
                                        <View>
                                        <OrderInfoTextWhite>
                                            Total amount
                                        </OrderInfoTextWhite>
                                        <OrderInfoTextRed>
                                            {item.price} €
                                        </OrderInfoTextRed>
                                        </View>
                                        
                                    </DateTotalContainer>
                                        {item.products.map( (product) =>{
                                            return(
                                                <OrderProductInformation key={product._id}>
                                                    <ProductImageContainer>
                                                    <ProductImage source={{uri: (product.image)}} ></ProductImage>
                                                    </ProductImageContainer>
                                                    <ProductTextsContainer>
                                                    <ProductText>{product.name} </ProductText>
                                                    <ProductText> x {product.amount} </ProductText>
                                                    <ProductText>{product.price} € </ProductText>
                                                    </ProductTextsContainer>
                                                    
                                                </OrderProductInformation>
                                            )
        
                                        })}
                                    
                                    </LinearGradient>
                                </OrderContainer>
        
                            )
                        })}
                        </>                 
                    :
                        <>
                            <NoOrdersMessage> There are no Orders yet</NoOrdersMessage>
                        </>
                    }
                </ScrollView>
                    
                </ProfileBadgesContainer>
        </ProfileContainer>
    )
}

export default ProfilePage;