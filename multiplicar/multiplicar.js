const fs = require('fs');

// Una forma de exportar la función  --> module.exports.crearArchivo
let crearArchivo = base => {

    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= 10; i++) {

            // resultado = base * i;
            data += (` ${base} * ${i} = ${base * i} \n`)
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    })
}

// Otra forma de exportar funciones
module.exports = {
    crearArchivo
}