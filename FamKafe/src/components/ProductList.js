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
    display: flex;
    justify-content: center;
`;

const ListTitle = styled.Text`
  margin-top: 3%;
  padding-left: 3%;
  font-size: 30px;
  color: white;
  font-weight: bold;
`;

const ProductCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  margin-left: 2.5%;
  
`;
const TextsContainer = styled.View`
  margin-left: 10px;
  width: 70%;
  height: 100%;
  display:flex;
  flex-direction: column;
`

const ProductImage = styled.Image`
  width: 100px;
  height: 130px;
  border-radius: 10px;
`;

const ProductName = styled.Text`
  color: whitesmoke;
  font-size: 25px;
  margin-top: 10px;
  margin-top: 10px;
  text-align: left;
  width: 80%;
`;

const ProductType = styled.Text`
  color: whitesmoke;
  font-size: 10px;
  text-align: left;
  margin-bottom: 20px;
`

const PriceContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
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
`

const AddToCartText = styled.Text`
  color: whitesmoke;
  font-size: 20px;
`

export default ProductList = () => {

  const { allProducts, actualOrder, setActualOrder } = useContext(Context);
  const [productModalVisible, setProductModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [groupedProducts, setGroupedProducts] = useState({});

  const addToCart = (item) => {
    const productToFind = actualOrder.find((element) => element._id === item._id);
    if (productToFind === undefined) {
      item.amount = 1;
      setActualOrder([...actualOrder, item]);
    } else {
      productToFind.amount++;
      setActualOrder([...actualOrder]);
    }
  };

  useEffect(() => {
    const groupProductsByCategory = () => {
      const grouped = allProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
      }, {});
      setGroupedProducts(grouped);
    };

    if (allProducts && allProducts.length > 0) {
      groupProductsByCategory();
    }
  }, [allProducts]);

  return (
      <ProductsContainer>
        {allProducts.length != 0 ?
        <FlatList
          style={{ display: 'flex', flex:1 }}
          data={Object.keys(groupedProducts)}
          keyExtractor={(item) => item}
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <>
              <ListTitle>{item.charAt(0).toUpperCase() + item.slice(1)}</ListTitle>
              <FlatList
                  data={groupedProducts[item]}
                  keyExtractor={(product) => product._id}
                  nestedScrollEnabled={true}
                  renderItem={({ item: product }) => (
                    <ProductCard 
                    onPress={() => { setProductModalVisible(true), setSelectedProduct(product) }}>
                      <LinearGradient colors={['rgba(255, 255, 255, 0.2)', 'rgba(12, 15, 20, 0.5)']}  start={{ x: 0.7, y: 0.7 }} end={{ x: 0, y: 0 }} style={{ width: '100%', padding: 20, display:'flex', marginVertical: 5,  flexDirection: 'row', borderRadius: 15}} >
                                <ProductImage
                                  source={{ uri: product.image}}
                                />
                                <TextsContainer>
                                <ProductName>{product.name}</ProductName>
                                <ProductType>{product.shortDescription}</ProductType>
                                <PriceContainer>
                                  <View>
                                    <ProductPrice>{product.price} €</ProductPrice>
                                  </View>
                                  <View>
                                  <AddToCartButton onPress={() =>{ addToCart(product) } }>
                                      <AddToCartText>+</AddToCartText>
                                  </AddToCartButton>
                                  </View>
                                </PriceContainer>
                                </TextsContainer>
                               
                        </LinearGradient>
                      </ProductCard>
                    )
                  }
                  
                  />
              </>
              )} 
          />
          : 
            null 
          }
      
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















{/* <FlatList
      style={{ flex:1 }}
      data={categories}
      renderItem={({category, index}) => ( 
          <>
                <ListTitle>{categories[index]}</ListTitle>
                <FlatList
                    style={{flex: 1, height: '35%', paddingLeft: '2%'}}
                    horizontal={true}
                    data={groupedProducts}
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
                /> */}