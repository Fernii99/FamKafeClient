
import axios from "axios";

export default getProfileOrders = async (userId) =>{

    console.log("GET PROFILE ORDERS");
    
    try{
        const response = await axios.get(`http://localhost:3000/orders/${userId}`); 
        
        console.log(response.data)
        return response.data;
    }catch(e){
        return e;
    }
}