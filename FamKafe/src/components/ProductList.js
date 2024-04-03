import { View, FlatList, Text, ScrollView } from "react-native"
import styled from "styled-components"

import Products from "../../products.db"

const ProductsContainer = styled.View`
    height: 25%;
    background-color:blue;
`

const ScrollViewContainer = styled.ScrollView`
    position: 'absolute';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const ProductCard = styled.View`
    width: 100px;
    background-color: white;
    margin-right: 25px;
`

const ProductName = styled.Text`
    color: blue;
    font-size: 15px;
`
export default ProductList = (category) =>{
    return(
        <ProductsContainer>
            <ScrollViewContainer horizontal={true} >
            {Products.map((product) => {
                return(
                    <ProductCard>
                        <ProductName>{product.name}</ProductName>
                    </ProductCard>
                )
            })}
            </ScrollViewContainer>
            
        </ProductsContainer>   
       
            
        
    )
}