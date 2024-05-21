
import axios from "axios";

export default postNewOrder =  (newOrder) =>{

    console.log("POST NEW ORDER CALL")
    console.log(newOrder)
    try{
        const response = axios.post(`http://localhost:3000/orders/new`, {
            body: {"_id": "663e5767b3fef60ec85d727b", "orderDate": "Tue May 21 2024 15:51:13 GMT+0200", "price": "19", "products": [{"_id": "6625239e91d65f10ec170e41", "amount": 1, "category": "Café", "description": "Cafe solo ", "image": "https://firebasestorage.googleapis.com/v0/b/fam-kafe-app.appspot.com/o/Espresso.png?alt=media&token=c3d0e179-b980-4742-a603-cdcb1df93874", "name": "solo", "price": "1,20", "shortDescription": "cafe solo preparado a alta presion "}, {"__v": 0, "_id": "6627bface6efb8cdec5fd92b", "amount": 1, "category": "café", "description": "El café manchado o caffè macchiato en italiano, también llamado espresso macchiato, es un café cortado típico de Italia, consiste en un expreso con una pequeña cantidad de leche caliente y espumada. En España se suele denominar café cortado.", "image": "https://firebasestorage.googleapis.com/v0/b/fam-kafe-app.appspot.com/o/Macchiato.png?alt=media&token=dddc5cca-de8d-44bd-bd4e-776c296e2440", "name": "macchiato", "price": "1,40", "shortDescription": "Café macchiato"}, {"__v": 0, "_id": "6627d6a124a935befab602f2", "amount": 2, "category": "café", "description": "Caffè latte, a menudo abreviado simplemente como latte en inglés, es una bebida de café de origen italiano elaborada con espresso y leche al vapor, servida tradicionalmente en un vaso.", "image": "https://firebasestorage.googleapis.com/v0/b/fam-kafe-app.appspot.com/o/Latte.png?alt=media&token=d7f20516-fa18-4a69-92de-db6aebbcb841", "name": "latte", "price": "1,60", "shortDescription": "Café Latte"}, {"_id": "66476e7d6d4b2971acd521ae", "amount": 1, "category": "Café", "description": "Cafe Americano ", "image": "https://firebasestorage.googleapis.com/v0/b/fam-kafe-app.appspot.com/o/Espresso.png?alt=media&token=c3d0e179-b980-4742-a603-cdcb1df93874", "name": "Americano", "price": "1,50", "shortDescription": "se obtiene agregando agua caliente sobre un espresso servido en una taza mediana"}]}
        }); 

        return(response)
        
        
    }catch(e){
        return e;
    }
}