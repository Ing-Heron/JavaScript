(() => {
    'use strict'
    /*
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
    */

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = []; 

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo'),
          puntosHTML = document.querySelectorAll('small'),
          divCartasJugador = document.querySelector("#jugador-cartas"),
          divCartasComputadora = document.querySelector("#computadora-cartas");


    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck;
        for (let i; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
    }

    // Esta funcion crea una nueva baraja 
    const crearDeck = () => {
        deck = [];
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

        return _.shuffle( deck );
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
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

    // Turno: 0 = El primer jugador y el ultimo séra la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] += valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        do {
            const carta = pedirCarta();
            acumularPuntos(carta, puntosJugadores.length - 1);

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

    // Eventos
    btnPedir.addEventListener('click', () => { // callback
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

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

})();