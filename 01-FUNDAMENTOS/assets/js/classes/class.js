class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); //undefined
        console.log('Hola a todos, soy un metodo estático');
    }

    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
        // metodo que se ejecutara automaticamente cuando se llame la clase
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }

    quienSoy() {
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('peter parker', 'Spiderman', 'soy tu amigable vecino spiderman');
const ironman = new Persona('tony stark', 'ironman', 'yo soy ironman');

// console.log( ironman );

// spiderman.quienSoy();
spiderman.miFrase();
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// ironman.quienSoy();
// ironman.miFrase();

// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );
console.log(`Conto estático: ${Persona._conteo}`);
console.log( Persona.conteo );
Persona.mensaje();