
import { useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { TextInput, StyleSheet } from "react-native"
import styled from "styled-components";
import { Context } from "../../helpers/context/context";

const CustomTextInput = styled.TextInput`
  display:flex;
  align-items:center;
  justify-content: center;
  width: 90%;
  height: 8%;
  color: yellow;
  margin-left: 5%;
  margin-right: 5%;
  border-color: rgba(82, 85, 90, 0.4);
  background-color: #141921 ;
  border-radius: 40px;
  padding-left: 20px;
  margin-bottom: 3%;
`

export default function InputField(){

  const{ setFilterValue, allProducts, setAllProducts } = useContext(Context)

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    console.log(allProducts)
  }, [inputValue])


 
  

    return(
        <CustomTextInput
        onChangeText={() =>{}}
        value={inputValue}
        placeholder={"Search for something..."}
      />
    )
}
