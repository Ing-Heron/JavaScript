
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    const myGenerator = myfirstGeneratorFunctions();

    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
}

 function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield ++ currentId;
    }
 }

function* myfirstGeneratorFunctions() {
    yield 'Primer valor';
    yield 'segundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';

    return 'Ya no hay valores';
    yield 'Ya no puedes hacer nada';
}