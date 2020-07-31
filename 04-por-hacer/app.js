const argv = require("./config/yargs").argv;
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
        console.log(argv.descripcion, argv.completado);
    break;
    default:
        console.log('Comando no permitido');
}