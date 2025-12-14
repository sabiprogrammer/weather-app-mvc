import { API_URL } from "./config.js";

const fetchWeatherData = async function(){
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        
    }catch(error){
        console.error(error);
    }
}

fetchWeatherData();