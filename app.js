// Require

/**
 * Tipos de require
 * Propia de node const fs = require('fs');
 * Qué no son nativos de NODE const fs = require('express');
 * Paquetes que nosotros escribimos const fs = require('./');
 */

const { crearArchivo } = require('./multiplicar/multiplicar');

let base = '1';




crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));