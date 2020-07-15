const fs = require('fs');


let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);

    }

}

// Una forma de exportar la función  --> module.exports.crearArchivo
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            // resultado = base * i;
            data += (` ${base} * ${i} = ${base * i} \n`)
        }

        fs.writeFile(`tablas/tabla-${base}-al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al${limite}.txt`);

        });
    })
}

// Otra forma de exportar funciones
module.exports = {
    crearArchivo,
    listarTabla
}