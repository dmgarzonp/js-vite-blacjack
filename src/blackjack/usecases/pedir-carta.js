import { crearDeck } from "./crear-deck";

/**
 *  Esta funcion me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de String
 * @returns {String} retorna la carta del deck
 */
// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {
    

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}