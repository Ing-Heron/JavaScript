import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    	
    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch ( error => element.innerHTML = error );

}
/**
 * 
 * @param {String} id 
 */
const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero )
        throw `Hero with id ${ id } not found`;

    // Un return es un valor exitoso para un funcion async
    return hero?.name;
}