
/**
 * Se crea la carta elemento HTML de la pagina
 * @param {String} carta 
 * @param {*} id 
 * @param {Number} puntos 
 * @param {HTMLElement} documento 
 * @param {Number} posicion 
 */

//Creacion de la carta
export const mostratCarta = (carta, id, puntos,documento, posicion) => {
    documento[posicion].innerText = puntos;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    id.append(imgCarta);
};