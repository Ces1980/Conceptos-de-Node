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
    .command('crear', 'Genera un archivo con tabla de multiplicar', {
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

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        //Comando usado: node app listar --limite 5 -b 3
        //Salida de uso de comando  -->
        //3 * 1 = 3
        // 3 * 2 = 6
        // 3 * 3 = 9
        // 3 * 4 = 12
        // 3 * 5 = 15
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        //Comando usado: node app crear --limite 5 -b 3
        //Salida de uso de comando  --> Archivo creado: tabla-3-al5.txt
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv)



// let base = '5';
//
// let argv2 = process.argv;
// // let parametro = argv[2];
// // let base = parametro.split('=')[1]

// console.log('limite', argv.limite);




// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));