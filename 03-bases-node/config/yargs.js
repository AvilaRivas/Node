const opts = {
    base: {
        demand: true,
        alias:'b' 
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Creara un archivo donde aparecera la tabla de multiplicar de la base enviada', opts)
    .help()
    .argv;

module.exports = {
    argv
}