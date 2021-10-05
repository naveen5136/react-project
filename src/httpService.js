import Axios from 'axios';
import history from './history'; 

const axios = Axios.create({
    baseURL: window.HOST,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
}); 
const axios_unAuth = Axios.create({
    baseURL: window.HOST,
    headers: {
         Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    }
}); 

axios.interceptors.request.use(
    config => {
        // let authToken = "";
        // if (storage.getItemValue(keys.AUTHORIZATION_TOKEN)) {
        //     authToken = storage.getItemValue(keys.AUTHORIZATION_TOKEN);
        // }
        // config.headers['Authorization'] = authToken;
       // config.headers['Content-Type'] = 'application/json';
       return config;
   },
   error => {
    Promise.reject(error)
});
axios.interceptors.response.use((response) => {
    if (response.data.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
        history.replace('/signIn');
   }
 return response;
}, (error) => {
   if (error.response.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
       history.replace('/');
   }
   return Promise.reject(error);
});  
// handling unexpected response error message globally

axios.interceptors.response.use((response) => {
    if (response.data.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
        history.replace('/signIn');
   }
 return response;
}, (error) => {
   if (error.response.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
       history.replace('/');
   }
   return Promise.reject(error);
});


axios_unAuth.interceptors.response.use((response) => {
    if (response.data.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
       history.replace('/signIn');
   }
 return response;
}, (error) => {
   if (error.response.code === 401) {
    //    storage.getItemValue(keys.AUTHORIZATION_TOKEN);
    //    storage.getItemValue(keys.USERNAME);
       history.replace('/');
   }
   return Promise.reject(error);
});


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,

    get_unAuth: axios_unAuth.get,
    post_unAuth: axios_unAuth.post,
} 