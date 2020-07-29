const argv = require('yargs')
    .command('crear','Crear elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Actualiza el estado compleado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;
    
module.exports = {
    argv
}