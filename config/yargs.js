// este pck contiene la funcion 'argv' la cual define los--
// comandos 'listar' y 'crear' y sus respectivos parametros--
// 'base' y 'limite'; dado que estos dos parametros son exactamente--
// iguales en ambos comandos, se crea el objeto 'opts' para definirlos
// y de esta manera se simplifica el codigo
// 
// la funcion 'argv' de este pck sera llamada por otro pck por lo que--
// utiliza el pck 'module.exports' para compartir dicha funcion--
// con el pck que la invoco


const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Muestra en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con una tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}