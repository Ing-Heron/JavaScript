let juegos = ['Zelda', 'Maria', 'Metroid', 'Chrono'];
console.log( 'Largo: ', juegos.length );

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1 ];
console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push( 'F-Zero' ); // agrega un elemento hasta el final del arreglo
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift( 'Fire Emblem' );    // agrega un elemento al inicio del arreglo
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();    // borra el ultimo elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;
let juegosBorrados = juegos.splice( pos, 2 );   // borra desde la posicion deseada los valores
console.log({ juegosBorrados, juegos} );        // que se desea

let metroidIndex = juegos.indexOf( 'Metroid' ); // CaSeSeNsItIvE
console.log( metroidIndex );
