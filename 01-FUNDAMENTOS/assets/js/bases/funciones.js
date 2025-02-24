function saludar() {
    console.log(' Hola Mundo' );
}

function saludarArgumentos( nombre ) {
    console.log( arguments );
    console.log( 'Hola ' + nombre );
}

const saludar2 = function() {
    console.log( 'Hola Mundo' );
}

const saludarFlecha = () => {
    console.log( 'Hola Flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola Flecha ', nombre );
}

function saludarConReturn() {
    return 1;
    console.log( 'esta linea jamas se ejecutara' );
}

function saludarConReturn2() {
    // return 1, 2;
    return [1, 2];
    console.log( 'esta linea jamas se ejecutara' );
}

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio2() {
    return Math.random();
}

const getAleatorio = () => Math.random() * 10;

// saludarArgumentos( 'Heron', 40, true, 'Mexico' );
// saludar2( 'Heron' );
// saludarFlecha();
// saludarFlecha2( 'Heron' );
// const retornoDeFuncion = saludarConReturn();
// console.log( retornoDeFuncion );
// const retornoDeFuncion = saludarConReturn2();
// console.log( {retornoDeFuncion} );
// console.log( sumar(2, 2) );
// console.log( sumar2(2,2) );
console.log( getAleatorio() );
