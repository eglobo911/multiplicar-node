// este pck recibe de la linea de comando varios parametros
// se utiliza el obj 'yargs.argv' donde se almacena lo recibido
// se programa recibir los comandos 'listar' y 'crear' como primer argumento
// y segun el comando recibido se llamaran a dos funciones diferentes--
// 'ListarTabla' y 'crearArchivo' que se encuentran en el objeto multiplicar
// Dichas funciones son declaradas con una instruccion 'const'--
// y con un comando 'require' el pck 'multiplicar'
//
// con el fin de simplificar al maximo este pck, la funcion 'argv' para--
// definir los comandos 'listar' y 'crear' y los respectivos parametros--
// 'base' y 'limite' se hace en un pck externo llamado 'yargs'
//
// para poder invocar la funcion 'argv' se declara con una instruccion--
// 'const' y un comando 'require' indicando donde se encuentra dicha funcion

const argv = require('./config/yargs').argv;

const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        ListarTabla(argv.base, argv.limite)
            // console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        // console.log('crear');

        break;

    default:
        console.log('Cmd no identificado');
}