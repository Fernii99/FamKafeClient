
import axios from "axios";

export default postNewOrder = async (newOrder) =>{

    try{
        const response = await axios.get(`http://localhost:3000/orders/new`, {
            body: newOrder
        }); 
            return response.data.data
        
    }catch(e){
        throw e;
    }
}