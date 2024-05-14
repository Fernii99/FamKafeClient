
import axios from "axios";

export default getAllProducts = async ()=>{

    try{
        const response = await axios.get(`http://localhost:3000/products`); 
            return response.data.data
        
    }catch(e){
        throw e;
    }
}