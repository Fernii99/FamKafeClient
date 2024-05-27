
import axios from "axios";

export default getAllOrders = async () =>{

    try{
        const response = await axios.get(`http://localhost:3000/orders/all`); 
        return response.data;
    }catch(e){
        return e;
    }
}