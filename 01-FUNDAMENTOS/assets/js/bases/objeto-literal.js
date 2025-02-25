let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    edad: 40,
    vivo: false,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'avengers',
};

console.log( personaje );
console.log('nombre:', personaje.nombre );
console.log('edad:', personaje.edad );
console.log('coords:', personaje.coords);
console.log('lat:', personaje.coords.lat);
console.log('No.trajes', personaje.trajes.length);

const x = 'vivo';
console.log('vivo', personaje[x]);

console.log('Ultima pelicula', personaje["ultima pelicula"]);

// Mas detalles
// si se desea borrar una entidad del objeto se debe usar la palabra reservada 'detele'
delete personaje.edad;
console.log( personaje );

// se puede agregar nuevas entidades al objeto
personaje.casado = false;

// se puede transformar el objeto en un arreglo
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// se puede bloquear el objeto para que no sea editable
Object.freeze( personaje );
personaje.dinero = 100000000;
personaje.casado = true;
personaje.direccion.ubicacion = 'Mexico';
console.log( personaje );

// se puede obtener en un arreglo todos los nombres y valores por separado del objeto
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades, valores );
