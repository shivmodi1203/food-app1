import axios from "axios";

export const baseURL = "http://127.0.0.1:5001/food-delivery-ac9dd/us-central1/app";

export const validateUserJwtToken = async (token) => {
    try{
        const res = await axios.get(`${baseURL}/api/users/jwtVerfication`, {
            headers : {Authorization : "Bearer "+token}
        })
        return res.data.data;
    }catch(err){
        return null;
    }
}