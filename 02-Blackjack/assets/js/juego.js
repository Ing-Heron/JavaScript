/*
* 2C = Two of Clubs
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];



const crearDeck = () => {
    // Esta funcion crea una nueva baraja
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo ); 
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );
    return deck;
}

const pedirCarta = () => {
    // Esta funcion me permite tomar una carta
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    // if( isNaN( valor ) ) {
    //     puntos = ( valor === 'A' ) ? 11 : 10;
    // } else {
    //     puntos = valor * 1;
    // }
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;
}

crearDeck();
const valor = valorCarta( pedirCarta() );
console.log( valor );
