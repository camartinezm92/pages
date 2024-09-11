import { pedirCarta, valorCarta, mostratCarta, puntosAS } from './'

/**
 * tunro de juego y validaciones el jugador PC
 * @param {Array<String>} desk      Ejemplo [1D, 2A, AC...] 
 * @param {Array<String>} cartasC   Ejemplo [1D, 2A, AC...]
 * @param {Number} puntosComputadora Ejemplo 10 
 * @param {Number} puntosJugador    Ejemplo 10  
 * @param {HTMLElement} ptsHTML     Ejemplo document.querySelector.... 
 * @param {Number} asC     Ejemplo 10  
 * @param {String} tipo     Ejemplo 'Computadora' 
 */

    //Funcion de juego del PC
    export const jugarPC = (desk,cartaS,puntosComputadora,puntosJugador,ptsHTML,aC,tipo) => {
        do {
            let cartaJugada= pedirCarta(desk);
            let valorCard = valorCarta(cartaJugada);
            puntosComputadora = puntosAS(puntosComputadora, valorCard, aC, tipo);
            mostratCarta(cartaJugada, cartaS, puntosComputadora, ptsHTML, ptsHTML.length - 1);

        } while (puntosJugador > puntosComputadora && puntosComputadora < 21 && puntosJugador <= 21);

        // brinda un tiempo de respuesta mas lento debido a que lo ideal es que se se vean las cartas y seguido de esto los mensajes
        setTimeout(() => {
            if (puntosJugador > 21) { alert("Computadora gana") }
            else if (puntosComputadora > 21) { alert("Jugador Gano") }
            else if (puntosComputadora > puntosJugador) { alert("Computadora Gano") }
            else if (puntosComputadora === puntosJugador) { alert("Empate!!!") };
        }, 300);

    };