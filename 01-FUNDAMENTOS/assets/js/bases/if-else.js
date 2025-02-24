a = 5;

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if ( dia === 0 ) {
    // = asignacion
    // == comparacion sin importar el tipo de primitivo
    // === comparacion importando el tipo de primitivo
    console.log('Hoy es domingo');
} else if ( dia === 1 ) {
    console.log( 'Hoy es lunes' );
} else if ( dia === 2 ) {
    console.log('Hoy es martes')
} else {
    console.log('Hoy no es lunes, martes ni domingo');
}

const diasletras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
const diaLetras = ['domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log( diaLetras[dia] || 'Dia no definido' );