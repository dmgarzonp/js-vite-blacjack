import _ from 'underscore';

/**
 * Esta funcion crea un nuevo Deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']; 
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} Retorna un nuevo Deck de cartas
 */

 export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

     if(!tiposDeCarta || tiposDeCarta.length === 0  ) throw new Error('tiposDeCarta es Obligatorio, como tambien debe ser un arreglo');

     if(!tiposEspeciales || tiposEspeciales.length === 0  ) throw new Error('tiposEspeciales es Obligatorio, como tambien debe ser un arreglo');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );   
    return deck;
}

//export default crearDeck;

