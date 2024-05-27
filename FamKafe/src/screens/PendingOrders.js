import { useContext, useEffect } from "react";
import { View,Text, ScrollView, Image } from "react-native";
import { Context } from "../../helpers/context/context";
import LinearGradient from "react-native-linear-gradient";

import styled from "styled-components";
import UpdateOrder from "../helpers/axios/UpdateOrder";

const PendingOrdersListContainer = styled.View`
    display: flex;
    flex: 1;
    background-color: #0C0F14;
    padding-left: 2%;
    padding-right: 2%;
`

const PageTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-bottom:10px;

`

const OrderCard = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`

const OrderDone = styled.TouchableOpacity`
    border-radius: 10px;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #D17842;
    align-items: center;
    justify-content: center;
`

const ProductAmount = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`

 const PendingOrders = () =>{

    const {pendingOrders} = useContext(Context);

    const updateOrder = async(orderId) =>{

        console.log("orderId");
        console.log(orderId);

        const updateOrder = await UpdateOrder(orderId);
        console.log(updateOrder);
        
    }

    return(
        <PendingOrdersListContainer>
            <PageTitle> Pending Orders: </PageTitle>
            <ScrollView style={{flex: 1, display:'flex'}}>
                {pendingOrders.map((order) => {
                    return(
                        <LinearGradient key={order._id} colors={['#262B33', '#262B33']}  start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: '100%', marginBottom: '7%', padding:12, borderRadius: 15 }} >
                            {order.products.map((product) => {
                                return(
                                    <OrderCard key={product._id}>
                                        <ProductAmount>{product.name}</ProductAmount>
                                        <Text style={{color:"#D17842", fontWeight: "bold", fontSize: 20}}> X </Text>
                                        <ProductAmount>{product.amount}</ProductAmount>
                                    </OrderCard>
                                )
                            })}
                            <OrderDone onPress={() => { updateOrder(order._id)}}><Text style={{color: "black"}}> ORDER DONE </Text></OrderDone>
                        </LinearGradient>
                    )
                })}
            </ScrollView>
            
        </PendingOrdersListContainer>
    )
   
}

export default PendingOrders;