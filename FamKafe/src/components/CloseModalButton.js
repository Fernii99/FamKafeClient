import styled from "styled-components";


const CloseModalComponent = styled.Pressable`
    position: absolute;
    top: 10%;
    left: 2%;
    z-index: 2;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent ;
    border: 1px  #FFF;
    height: 40px;
    width: 40px;
`

const CloseModalText = styled.Text`
    color: #FFF;
    font-size: 20px;
`

export default function CloseModalButton ({setVisibility}) { 


    const closeModal = () => {
        setVisibility(false)
    }

    return(
        <CloseModalComponent onPress={closeModal}>
            <CloseModalText> {`<`} </CloseModalText>
        </CloseModalComponent>
    )

}