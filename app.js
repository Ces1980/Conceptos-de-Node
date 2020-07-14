// Require

/**
 * Tipos de require
 * Propia de node const fs = require('fs');
 * Qué no son nativos de NODE const fs = require('express');
 * Paquetes que nosotros escribimos const fs = require('./');
 */

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
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

// let base = '5';
//
let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

console.log('limite', argv.limite);




// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));