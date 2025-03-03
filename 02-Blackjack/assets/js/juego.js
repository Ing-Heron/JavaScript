const miModulo = (() => {
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

    let puntosJugadores = [],
        puntosJugador = 0;

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo'),
          puntosHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll(".divCarta");


    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
            puntosHTML[i].innerText = 0;
        }
        divCartasJugadores.forEach(elem => elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        puntosJugador = 0;
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
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }


    const crearCarta = ( carta, turno ) => {
        // <img class='carta' src='assets/carta/2C.png'>
        const _imgCarta = document.createElement('img');
        _imgCarta.classList.add('carta');
        _imgCarta.src = `assets/cartas/${carta}.png`;
        divCartasJugadores[turno].append( _imgCarta );
    }


    const determinarGanador = () => {
            const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
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


    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        let cont = 0
        do {
            console.log(cont)
            const carta = pedirCarta();
            puntosComputadora += acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length - 1)
            cont++;
        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

        determinarGanador();
    }
    
    // Eventos
    btnPedir.addEventListener('click', () => { // callback
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta( carta, 0 );

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
        inicializarJuego();
    });


    return {
        nuevoJuego: inicializarJuego
    };
})();