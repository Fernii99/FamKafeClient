import { View, Text, Image, Button, TouchableOpacity, Modal } from "react-native"
import Products from '../../products.db';

import styled from "styled-components";
import { useEffect, useContext } from "react";
import CloseModalButton from "../components/CloseModalButton";
import { Context } from "../../helpers/context/context";

const ProductContainer = styled.View`
    display: flex;
    flex:1;
    width: 100%;
`



const ProductPicturePontainer = styled.View`
    width: 100%;
    height: 60%;
    border-top-right-radius: 100%;

`

const ProductShortInformation = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35%;
    background-color: rgba(0,0,0,0.5);
    border: 1px solid black;
    border-color: rgba(0,0,0,0);
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-left: 5%;
    padding-top: 5%;
`

const ProductPicture = styled.ImageBackground`
    display: flex;
    width: 100%;
    height: 100%;
`

const ProductInformationContainer = styled.View`
    width: 100%;
    height: 25%;
    padding-top: 5%;
    padding-left: 5%;
    background-color: #0C0F14;
`
const ProductName = styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
`

const ProductShortDescription = styled.Text`
    width: 50%;
    color: #fff;
    opacity: 0.7;
`

const ProductLongDescription = styled.Text`
    color: #fff;
    opacity: 0.7;
`

const IngredientsTextTitle = styled.Text`
margin-top: 10%;
    color: #fff;
    opacity: 0.8;
    font-size: 18px;
`
const IngredientsDescription = styled.Text`
    color: #fff;
    opacity: 0.7;
`

const PriceContainer = styled.View`
    width: 100%;
    display: flex;
    flex:1;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    flex-direction: row;
    background-color: #0C0F14;
`

const PriceContainerLeft = styled.View`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const PriceContainerRight = styled.View`
    
`

const PriceTextSmall = styled.Text`
    margin-left: 4%;
    font-size: 10px;
    color: white;
`

const PriceText = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
`

const AddToCartButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 10px;
    width: 100%;
    background-color: #D17842;
    color: white;
    padding: 5%;
`

const ProductScreen = ({item, setProductModalVisible} ) => {

  const {actualOrder, setActualOrder} = useContext(Context);


    const addToCart = (item) => {

        console.log("ACTUAL ORDER")
        console.log(actualOrder)
    
        const productToFind = actualOrder.find((element) => (element._id === item._id ));
    
        if(productToFind === undefined){
          item.amount = 1;
          console.log("ITEM AFTER MODIFYING IT")
          console.log(item)
          setActualOrder([...actualOrder, item]);
        }
        else{
          item.amount++
        }
       }

    return(
            <ProductContainer>
            <ProductPicturePontainer>   
                <ProductPicture source={{ uri:(item.image) }} />
                <CloseModalButton setVisibility={setProductModalVisible} />
                <ProductShortInformation>
                    <ProductName>{item.name}</ProductName>
                    <ProductShortDescription>{item.description}</ProductShortDescription>
                </ProductShortInformation>
            </ProductPicturePontainer>
            <ProductInformationContainer>
                <ProductName>{item.name}</ProductName>
                <ProductLongDescription>{item.shortDescription}</ProductLongDescription>

                <IngredientsTextTitle>Ingredients</IngredientsTextTitle>
                <IngredientsDescription>{item.ingredients}</IngredientsDescription>
            </ProductInformationContainer>

            <PriceContainer>
            <PriceContainerLeft>
             <PriceTextSmall>PRICE</PriceTextSmall>
                <PriceText>{item.price } € </PriceText>
            </PriceContainerLeft>
               
            <PriceContainerRight>
               <AddToCartButton onPress={() =>{ addToCart(item) } }><PriceText>ADD TO CART</PriceText></AddToCartButton>
            </PriceContainerRight>
            </PriceContainer>
        </ProductContainer>

        
        
    )
}

export default ProductScreen;