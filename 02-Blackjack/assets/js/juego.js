/*
* 2C = Two of Clubs
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");


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


// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        // <img class='carta' src='assets/carta/2C.png'>
        const imgCarta = document.createElement('img');
        imgCarta.classList.add('carta');
        imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasComputadora.append( imgCarta );

        if (puntosMinimos > 21) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
                alert( 'Nadie gana :(' );
            } else if ( puntosMinimos > 21 ) {
                alert( 'Computadora gana' );
            } else if ( puntosComputadora > 21 ) {
                alert( 'Jugador Gana' );
            } else if ( puntosComputadora === 21 ) {
                alert( 'Computadora Gana' );
            } else if ( puntosComputadora > puntosMinimos ) {
                alert( 'Computadora Gana' );
            } else {
                alert( 'Jugador gana' );
            }
    }, 10 );
    
}


crearDeck();

// Eventos
btnPedir.addEventListener('click', () => { // callback
    const carta = pedirCarta();
    puntosJugador += valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    // <img class='carta' src='assets/carta/2C.png'>
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador )
    } else if ( puntosJugador === 21 ){
        console.warn('Ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        alert( 'Jugador Gana' );
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {
    deck = [];
    btnPedir.disabled = false;
    btnDetener.disabled = false;
    const imgCarta = document.querySelectorAll('img');
    for (element of imgCarta) {
        element.remove();
    }
    for ( puntaje of puntosHTML) {
        puntaje.innerText = 0;
    }
    puntosComputadora = 0;
    puntosJugador = 0;
    deck = crearDeck();
    console.log( deck );
});
