const argv = require('./config/yargs').argv;

const {crearArchivo, mostrarTabla} = require('./multiplicar/multiplicar'); //descruturacion del objeto del require, la funcion crearArchivo es creada para este modulo

let comando = argv._[0];


switch(comando){
    case 'listar':
        mostrarTabla(argv.base, argv.limite)
            .then(resp => console.log('tabla completada'))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado: ${resp}`))
            .catch(e => console.log(e));
        break;

    default: console.log('Comando no reconocido');
}



