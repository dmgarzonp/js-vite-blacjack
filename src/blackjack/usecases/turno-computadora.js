import {pedirCarta, valorCarta, crearCartaHTML} from './';


/**
 * turno de la computadora
 * @param {Number} puntosMinimos  puntyos minimos que la computadora nesecita para ganar
 * @param {HTMLElement} puntosHTML Elemntos HTML para mostrar puntos
 * @param {HTMLElement} divCartasComputadora Elemnto HTML para mostrar computadporas 
 * @param {Array<String} deck  
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos es necesario');
    if( !puntosHTML ) throw new Error('Argumento puntosHTML son necesarios');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
