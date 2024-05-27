
import axios from "axios";

export default getPendingOrders = async ()=>{

    try{
        const response = await axios.get(`http://localhost:3000/orders/pending`); 
            return response.data.data
        
    }catch(e){
        throw e;
    }
}