const argv = require("./config/yargs").argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let commando = argv._[0];

switch(commando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por hacer ========'.green);
            console.log(tarea.descripcion);
            console.log('Estadp: ', tarea.completado);
            console.log('=========================='.green);
        };
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let resp = porHacer.borrar(argv.descripcion);
        console.log(`Elemento borrado?: ${resp}`);
        break;
    default:
        console.log('Comando no permitido');
}