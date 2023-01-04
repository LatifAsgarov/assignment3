import { baseURL } from "./base-url";
import axios from 'axios'

export const messages = async (data) => {
    try {
        let messages = await axios.post(`${baseURL}/messages`, data);
        return messages;
    } catch (error){
        return error.message
    }
}