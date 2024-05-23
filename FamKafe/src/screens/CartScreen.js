import { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Context } from "../../helpers/context/context";
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import postNewOrder from "../helpers/axios/postNewOrder";
import { act } from "react-test-renderer";

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

const ActionButtonTrash = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #ba3a30;
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

const MakeOrderButton = styled.TouchableOpacity`
    display: flex;
    align-items:center;
    justify-content: center;
    width: 60%;
    height: 100%;
    background-color: #D17842;
    bottom: 10px;
    border-radius: 100px;
`

const TotalOrderContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 7%;
    justify-content: space-between;
    position: absolute;
    bottom: 0px;
`

const TotalPriceText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`

const CartScreen = () =>{

    const { profileData, actualOrder, setActualOrder } = useContext(Context);
    const [orderTotalPrice, setOrderTotalPrice] = useState("");

    useEffect(() => {
        setOrderTotalPrice(CalculateTotal(actualOrder));
    }, [actualOrder]);

    const reduceAmount = (product) => {
        const updatedItems = actualOrder.map(item => item.name === product ? { ...item, "amount": item.amount - 1 } : item);
        setActualOrder(updatedItems);
    };

    const increaseAmount = (product) => {
        const updatedItems = actualOrder.map(item => item.name === product ? { ...item, "amount": item.amount + 1 } : item);
        setActualOrder(updatedItems);
    };

    const deleteItem = (product) => {
        const updatedItems = actualOrder.filter(item => item.name !== product);
        setActualOrder(updatedItems);
    };

    const placeOrder = async () => {
        const orderDate = new Date();
        const formatedDate = orderDate.toLocaleDateString("es-ES")
        const totalPrice = CalculateTotal(actualOrder);

        const newOrder = {
            "orderDate": formatedDate,
            "products": actualOrder,
            "profileid": profileData._id,
            "price": totalPrice,
            "status": "pending"
        };

        const response = await postNewOrder(newOrder);

        if (response.status === 201) {
            Alert.alert("ORDER PLACED SUCCESSFULLY");
            setActualOrder([]);
        } else {
            Alert.alert("Order Failed, try again in few minutes");
        }
    };

    const CalculateTotal = (order) => {
        const totalAmount = order.reduce((accumulator, product) => {
            const price = parseFloat(product.price.replace(',', '.'));
            return accumulator + (price * product.amount);
        }, 0);

        const roundedTotal = parseFloat(totalAmount.toFixed(3));

        return roundedTotal;
    };

            
            return (
                
            <CartContainer >
            { actualOrder.length === 0 ? <><Icon name="cart-outline" size={35} color="#fff" /><Text style={{color: "white"}}>Cart is empty</Text></>: 

            <ScrollView style={{display: 'flex', flex: 1, width: '100%' }} showsVerticalScrollIndicator={false} >
                {actualOrder.map((item) => {
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
                                        {item.amount === 1 ? 
                                        <>
                                            <ActionButtonTrash onPress={() => {deleteItem(item.name)}} ><Icon name="trash" size={20} color="white" /></ActionButtonTrash>
                                            <ItemAmountCounter><Text style={{color: 'white'}}>{item.amount}</Text></ItemAmountCounter>
                                            <ActionButton   onPress={() => {increaseAmount(item.name)}} ><ProductDescription> + </ProductDescription></ActionButton>
                                        </>
                                        :
                                        <>
                                            <ActionButton onPress={() => {reduceAmount(item.name)}} ><ProductDescription> - </ProductDescription></ActionButton>
                                            <ItemAmountCounter><Text style={{color: 'white'}}>{item.amount}</Text></ItemAmountCounter>
                                            <ActionButton   onPress={() => {increaseAmount(item.name)}} ><ProductDescription> + </ProductDescription></ActionButton>
                                        </>
                                        }
                                        </View>
                                </ProductButtonsContainer>
                            </LinearGradient>
                    )
                })}
            </ScrollView>
                }
            <TotalOrderContainer>
                <TotalPriceText >Total: {orderTotalPrice}€</TotalPriceText>
                <MakeOrderButton onPress={ () => placeOrder() } ><Text> Realizar Pedido </Text></MakeOrderButton>
            </TotalOrderContainer>
        </CartContainer>
            )
    }
       
    



export default CartScreen;