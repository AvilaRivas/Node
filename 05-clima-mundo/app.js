const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demnand: true
    }
}).argv;


console.log(argv.direccion);