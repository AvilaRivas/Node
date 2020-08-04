const axios = require('axios');
const api = require('./weather/api');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demnand: true
    }
}).argv;


console.log(argv.direccion);

let city = argv.direccion;

api.getWeather(city).then(data => {
    if (data.data.cod == 200) {
        console.log(`El clima de ${loc} es de ${data.data.main.temp}`);
    }
})
.catch(err => {
    console.log(`Error message: `, err);
})


// let trest = async() => {
//     try {
//         let test1 = await api.getWeather(city);
//     }
//     catch {

//     }
// }