const elMayor = (a, b) => (a > b) ? a : b;
console.log( elMayor(10, 5) );

const tieneMembresia = ( miembro ) =>  (miembro) ? '2 dolares' : '10 dolares';

console.log( tieneMembresia(true) );

const amigo = false;
const amigoArr = [
    'peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (()=>'nick fury')(),
    elMayor(10,20),
];

console.log( amigoArr );

const nota = 100;
const grado = nota >= 95 ? 'A+' : 
              nota >= 90 ? 'A' : 
              nota >= 85 ? 'B+' : 
              nota >= 80 ? 'B' : 
              nota >= 75 ? 'C+' : 
              nota >= 70 ? 'C' : 'F'; 

console.log({ nota, grado });