/**
 * 
 * @param {Array<String>} deck Example: ['AS', 'AH', '9H', '8S']
 * @returns {String} Retorna la ultima carta del deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length < 0 )
        throw new Error( 'Argumento deck obligatorio' );

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta;