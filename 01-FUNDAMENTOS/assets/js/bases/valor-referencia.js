let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
// let ana = juan;      // se cambia el valor juan porque solamente se referencia 
let ana = { ...juan };  // operador spred
ana.nombre = 'Ana';

console.log({ juan, ana });

// const cambiaNombre = ( persona ) => {
//     persona.nombre = 'Tony';
//     return persona;
// }

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice'); // esta funcion te permite medir el tiempo de ejecucion de una tarea
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.log({ frutas, otrasFrutas });
