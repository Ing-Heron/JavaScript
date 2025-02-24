// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona( 'Heron', 'Sanchez' );
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = (edad, ...args) => {  // argumentos rest, se puede poner argumentos antes del rest
    // console.log( {edad, args} );                   // pero no se puede poner argumentos despues del rest.
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(20, true, false, 'Heron', 'Hola');
console.log( {casado, vivo, nombre, saludo} );

const { apellido: nuevoApellido } = crearPersona( 'Heron', 'Sanchez' );
console.log( {nuevoApellido} );

const Tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedads = ( personaje ) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'edad', personaje.edad );
//     console.log( 'trajes', personaje.trajes );
// }

const imprimePropiedads = ( {nombre, codeName, vivo, edad, trajes} ) => {
    console.log( {nombre} );
    console.log( {codeName} );
    console.log( {vivo} );
    console.log( {edad} );
    console.log( {trajes} );
}


imprimePropiedads( Tony );
