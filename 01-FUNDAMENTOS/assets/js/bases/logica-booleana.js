const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true );    //true
console.log( !true );   // false
console.log( !false );  // true

console.log( !regresaFalse() ); // true

console.warn('And');
console.log( true && true ); // true
console.log( true && false ); // false
console.log( false && false );
console.log('4 condiciones', true && true && true && false );

console.log('========');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.warn('OR');
console.log( true || false ); // true
console.log( false || true ); // true
console.log( false || false ); //false

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false );
