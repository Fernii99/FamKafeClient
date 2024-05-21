
import axios from "axios";

export default postNewOrder =  (newOrder) =>{

    console.log("POST NEW ORDER CALL")
    console.log(newOrder)
    try{
        const response = axios.post(`http://localhost:3000/orders/new`, {
            body: newOrder
        }); 

        return(response)
        
        
    }catch(e){
        return e;
    }
}