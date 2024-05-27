
import axios from "axios";

export default UpdateOrder = async (orderId) =>{

    
    try{
        const response = await axios.patch(`http://localhost:3000/orders/${orderId}`); 
            console.log("response.data FROM UPDATE ORDER");
            console.log(response.data);
        return response.data;
    }catch(e){
        return e;
    }
}