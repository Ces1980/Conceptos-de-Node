// Require

/**
 * Tipos de require
 * Propia de node const fs = require('fs');
 * Qué no son nativos de NODE const fs = require('express');
 * Paquetes que nosotros escribimos const fs = require('./');
 */

const fs = require('fs');


let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {

    // resultado = base * i;
    data += (` ${base} * ${i} = ${base * i} \n`)
}


/**
 * fs.writeFile('archivo a crear', 'contenido del archivo', (callback) => {
    if (err) throw err;
    console.log('El archivo tabla-dos.txt ha sido creado!')
});
 */
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado!`)
});