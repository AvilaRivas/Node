const axios = require('axios').default;

const apiKey = '46320526b8fe50641cd677de19a48471';

const getWeather = async(city) => {
    
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

module.exports = {
    getWeather
}