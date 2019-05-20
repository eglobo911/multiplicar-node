// este pck es llamado desde otro para ejecutar una de dos funciones:
// 'ListarTabla' o 'CrearArchivo'
// para cualquiera de las dos recibe dos parametros 'base' y 'limite'
// con dichos parametro calcula una tabla de multiplicar
// utiliza el paquete 'module.exports' para compartir ambas funciones--
// con el programa que lo llamo
// para ejecutar la funcion 'grabaArchivo'--
// utiliza el paquete 'fs.write' (file system) la cual es declarada al inicio
// se incluye el paquete 'colors' para dar colores en la consola

// required
const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite = 10) => {

    if (!Number(base) || !Number(limite)) {
        console.log(`El valor base ${base} o el valor limite ${limite} no es un numero`);
        return;
    }

    console.log(`Tabla del ${base}`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor base ${base} o el valor limite ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}'\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-a lim-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-a lim-${limite}.txt`)

        });


    });
}

module.exports = {
    crearArchivo,
    ListarTabla
}