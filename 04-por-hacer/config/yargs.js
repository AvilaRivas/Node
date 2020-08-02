const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean'
}

const argv = require('yargs')
    .command('crear','Crear elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado compleado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrara un elemento', {
        descripcion
    })
    .help()
    .argv;
    
module.exports = {
    argv
}