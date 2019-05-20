// este pck llama a la funcion 'crearArchivo'--
// la cual se encuentra en el pck externo 'multiplicar'--
// por lo que se dice que 'importa' dicha funcion
// la funcion se declara con la instruccion 'const' y el--
// pck 'multiplicar' se declara con el comando 'require'


const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '5';


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));