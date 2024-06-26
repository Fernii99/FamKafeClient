import { Text, View, ScrollView,  } from "react-native"
import styled from "styled-components";
import InputField from "../components/InputField";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import getAllProducts from "../helpers/axios/getAllProducts";
import { Context } from "../../helpers/context/context";
import { useContext } from "react";
import { all } from "axios";

const PageContainer = styled.View`
    width:100%;
    flex: 1;
    display: flex;
`
const Title = styled.Text`
    margin-bottom: 20px;
    margin-left: 5%;
    width: 100%;
    font-size: 30px;
    color: white;
    font-weight: bold;
`

const ProductsScreen = ()=> {
    
    return( 
        <ScrollView style={{flex: 1, backgroundColor:"#0C0F14"}}>
        <Title>What are you looking for</Title>
        <PageContainer>
            <ProductList />
        </PageContainer>
        </ScrollView>

    )
}

export default ProductsScreen;