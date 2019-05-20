// Este pck recibe el parametro 'base' desde la linea de comando
// lo hace utilizando el pck 'process' en el cual se guarda
// mucha informacion a tiempo ejecucion
// en 'process.argv' se guardan varios argumentos:
// el 0: es la ruta donde reside el node
// el 1: es la ruta donde reside el pck que se esta ejecutando
// el 2: son todos los parametros que se reciben desde la linea de comando
//    y se almacenan en este argumento separados por el signo '='
// luego llama la funcion 'crearArchivo' del pck 'multiplicar--
// enviandole el parametro 'base' para crear la tabla ${base} 

const { crearArchivo } = require('./multiplicar/multiplicar');

// se comenta la declaracion de 'base' ya que debe recibirse de cmd
// let base = '5';

// console.log(process);

let argv = process.argv;
let parametro = argv[2];

//console.log(parametro);

let base = parametro.split('=')[1]

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));