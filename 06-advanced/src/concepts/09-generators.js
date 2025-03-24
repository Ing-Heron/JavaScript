
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    const myGenerator = myfirstGeneratorFunctions();

    const genID = idGenerator();
    console.log( genID.next() );

    const button = document.createElement('button');
    button.innerText = 'click me';
    element.append( button );

    const renderButton = () => {
        const { value } = genID.next();
        button.innerText = `click ${ value }`;
    }

    button.addEventListener('click', renderButton);
    
}

function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield ++currentId;
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