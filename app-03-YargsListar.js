// este pck recibe de la linea de comando varios parametros
// se utiliza el obj 'yargs.argv' donde se almacena lo recibido y
// se puede definir el nombre de un comando a recibir como 1er parametro 
// y nombres para identificar y almacenar los siguientes parametros
// si el 1er parametro recibido es la palabra 'listar'--
// debe mostrarse un texto y esperar los parametros 'base' (obligatorio)--
// y 'limite' (opcional) con un valor default
// ademas se define la opcion para reconocer la palabra 'help' como parametro

const argv = require('yargs')
    .command('listar', 'Muestra en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

console.log('base', argv.base);
console.log('limite', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));