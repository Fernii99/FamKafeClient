import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import Products from '../../products.db';
import {View, Text, FlatList, Modal, Alert} from 'react-native';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import { Context } from '../../helpers/context/context';

import getAllProducts from '../helpers/axios/getAllProducts';
import ProductScreen from '../screens/ProductScreen';

import cartManager from '../helpers/CartManager'

const ProductsContainer = styled.View`
    flex: 1;
`;

const ListTitle = styled.Text`
  margin-bottom: 3%;
  padding-left: 3%;
  font-size: 30px;
  color: white;
  font-weight: bold;
`;


const ProductCard = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-right: 25px;
  min-width: 150px;
  min-height: 300px;
`;

const ProductImage = styled.Image`
    z-index: 10;
  width: 90%;
  height: 60%;
  border-radius: 10px;
  margin-top: 7px;
`;

const ProductName = styled.Text`
  color: whitesmoke;
  font-size: 20px;
  margin-top: 10px;
  text-align: left;
  width: 85%;
`;

const ProductType = styled.Text`
  color: whitesmoke;
  font-size: 10px;
  text-align: left;
  width: 85%;
`;

const PriceContainer = styled.View`
    width: 130px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 20px;
`

const ProductPrice = styled.Text`
    color: whitesmoke;
    font-size: 20px;
`

const AddToCartButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D17842;
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

const AddToCartText = styled.Text`
  color: whitesmoke;
  font-size: 20px;
`;

export default ProductList = () => {

  const {allProducts, actualOrder, setActualOrder} = useContext(Context);
  const [productModalVisible, setProductModalVisible ] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

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

  const categories = [
    "coffees",
  ];

  return (
      <ProductsContainer>
      <FlatList
      style={{ flex:1 }}
      data={categories}
      renderItem={({category, index}) => ( 
          <>
                <ListTitle>{categories[index]}</ListTitle>
                <FlatList
                    style={{flex: 1, height: '35%', paddingLeft: '2%'}}
                    horizontal={true}
                    data={allProducts}
                    renderItem={({item}) => (
                        <ProductCard 
                          onPress={() => { setProductModalVisible(true), setSelectedProduct(item) }}>
                                <LinearGradient colors={['rgba(255, 255, 255, 0.2)', 'rgba(12, 15, 20, 0.5)']}  start={{ x: 0, y: 0 }} end={{ x: 0.7, y: 0.7 }} style={{ width: '100%', alignItems: 'center', borderRadius: 15}} >
                                <ProductImage
                                  source={{uri: item.image}}
                                />
                                <ProductName>{item.name}</ProductName>
                                <ProductType>{item.category}</ProductType>
                                <PriceContainer>
                                  <View>
                                    <ProductPrice>{item.price} €</ProductPrice>
                                  </View>
                                  <View>
                                  <AddToCartButton onPress={() =>{ addToCart(item) } }>
                                      <AddToCartText>+</AddToCartText>
                                  </AddToCartButton>
                                  </View>
                                </PriceContainer>
                        </LinearGradient>
                            </ProductCard>
                    )}
                    keyExtractor={item => item.name}
                />
                </>
                )}
                keyExtractor={item => item}
                />
                  <Modal  
                    animationType="slide"
                    transparent={false}
                    visible={productModalVisible}
                  >
                    <ProductScreen item={selectedProduct} setProductModalVisible={setProductModalVisible} />
                  </Modal>
                </ProductsContainer>

              
  );
};
