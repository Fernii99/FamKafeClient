
import axios from "axios";

export default postNewOrder = async (newOrder) =>{

    try{
        const response = await axios.get(`http://localhost:3000/orders/new`, {
            body: newOrder
        }); 

        console.log(response)
        
        
    }catch(e){
        throw e;
    }
}