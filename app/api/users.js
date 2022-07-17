import http from './';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadingToast } from '../utils/toasts';
export const registerUser=async(user)=>{
    try {
        const {status} = await http.post(`${http.url}register`,JSON.stringify(user));
        return status;
    } catch (error) {
        console.log(error);
    }
}
export const loginUser=async(user)=>{
    try {
        const res = await http.post(`${http.url}login`,JSON.stringify(user));
        await AsyncStorage.setItem('token',JSON.stringify(res?.data?.token));
        await AsyncStorage.setItem('userId',JSON.stringify(res?.data?.userId));
        return res.status;
    } catch (error) {
        console.log(error);
    }
}
 