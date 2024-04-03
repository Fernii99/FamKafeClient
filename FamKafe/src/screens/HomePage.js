import { Text, View } from "react-native"
import styled from "styled-components";
import InputField from "../components/InputField";
import ProductList from "../components/ProductList";

const PageContainer = styled.View`
    width:100%;
    flex: 1;
    display: flex;
`
const Title = styled.Text`
    margin-left: 5%;
    width: 60%;
    font-size: 35px;
    color: white;
    font-weight: bold;
`

function HomePage() {
    return( 
        <PageContainer>
            <Title>Find the best coffee for you</Title>
            <InputField />
            <ProductList/>
        </PageContainer>
    )
}

export default HomePage;