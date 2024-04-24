
import { TextInput, StyleSheet } from "react-native"

export default function InputField(){
    return(
        <TextInput
        style={Styles.input}
        onChangeText={() => {}}
        placeholder={"Search for somethign..."}
      />
    )
}

const Styles = StyleSheet.create({
    input: {
        height: '2%',
        width: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        marginHorizontal: '5%',
        borderColor: 'rgba(82, 85, 90, 0.1)',
        padding: 15,
        borderRadius: 20,
        color: 'white',
        backgroundColor: '#141921',
    },
  });