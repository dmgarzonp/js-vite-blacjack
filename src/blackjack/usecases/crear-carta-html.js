
/**
 * Esta funcio crea la imagen de la carta
 * @param {String} carta
 * @returns {HTMLImageElements} imagen de retorno 
 */
export const crearCartaHTML = ( carta ) => {

    if( !carta ) throw new Error('La Carta des un argumento Obligatorio');
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    

    return imgCarta;

}