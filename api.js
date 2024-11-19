// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.thingspeak.com/update?api_key=IG1WCYROD9JCCQAN&field1=String(soilMoisture)&field2=String(temperature)&field3=String(humidity)&field4=String(soilConductivity)' // Replace with your backend URL
  });

export default api;
//Create an api.js file to manage your HTTP requests. This will allow us to easily use Axios and set the base URL for API calls.