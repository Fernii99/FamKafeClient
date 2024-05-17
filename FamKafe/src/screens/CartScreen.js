import { useContext, useEffect } from "react";
import { Alert, ImageBackground, Text, View, ScrollView } from "react-native";
import { Context } from "../../helpers/context/context";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";

const CartContainer = styled.View`
    width: 100%;
    padding-left: 5%;
    padding-right:5%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #0C0F14;
    align-self: center;
`

const ItemContainer = styled.View`
    border: 1px solid;
    border-color: white;
    width: 100%;
    padding:2%;
    border-radius: 15px;
`
const ProductImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin-right: 7%;
`

const ProductInformationContainer = styled.View`
    display: flex; 
    flex-direction: row;
`
const TextsContainers = styled.View`
    display: flex; 
    flex:1;
`

const ProductName =styled.Text`
    font-size: 25px;
    color: white;
    font-weight: bold;
`

const ProductDescription =styled.Text`
    font-size: 15px;
    color: whitesmoke;
    font-weight: light;
`

const ProductButtonsContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    margin-top: 5%;
`

const ActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #D17842;
    border-radius: 5px;
    margin-left: 3%;
    margin-right: 3%;
`

const  ItemAmountCounter = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 50px;
    height:30px;
    border-radius: 10px;
`


const CartScreen = () =>{

    const {actualOrder, setActualOrder} = useContext(Context)

    useEffect(() => {
    }, [])
    useEffect(() => {
    }, [actualOrder])

    const reduceAmount = (index) =>{
        console.log("reduceAmount");
        setActualOrder(actualOrder[index].amount + 1);
    }
    const increaseAmount = (index) =>{
        console.log("reduceAmount");
        console.log(actualOrder[index]);
        setActualOrder(...actualOrder, actualOrder[index].amount + 1);
    }

    return(
        <CartContainer >
            <ScrollView style={{display: 'flex', flex: 1, width: '100%' }} showsVerticalScrollIndicator={false} >
                {actualOrder.map((item, index) => {
                    return(
                            <LinearGradient key={item._id} colors={['#262B33', '#262B33']}  start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: '100%', marginBottom: '7%', padding:12, borderRadius: 15 }} >
                                <ProductInformationContainer>
                                    <ProductImage source={{uri: item.image}}></ProductImage>
                                    <TextsContainers>
                                    <ProductName >{item.name}</ProductName>
                                        <ProductDescription>{item.shortDescription}</ProductDescription>
                                    </TextsContainers>
                                </ProductInformationContainer>
                                <ProductButtonsContainer>
                                    <View>
                                        <ProductName>{item.price} €</ProductName>
                                    </View>
                                    <View style={{display: 'flex', flexDirection: 'row'}}>
                                        <ActionButton /* onPress={() => {reduceAmount(index)}} */><ProductDescription> - </ProductDescription></ActionButton>
                                        <ItemAmountCounter><Text style={{color: 'white'}}>{item.amount}</Text></ItemAmountCounter>
                                        <ActionButton  /* onPress={() => {increaseAmount(index)}} */><ProductDescription> + </ProductDescription></ActionButton>
                                    </View>
                                </ProductButtonsContainer>
                            </LinearGradient>
                    )
                })}
            </ScrollView>

        </CartContainer>
    )
}

export default CartScreen;