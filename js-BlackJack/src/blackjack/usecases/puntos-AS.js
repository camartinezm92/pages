


/**
 * Conteo de puntos y convercion de AS segun los puntos
 * @param {Number} puntos son los puntos que lleba el jugador
 * @param {Number} cartaValor valor d ela carta jugada solo el numero
 * @param {*} mazo conteo de puentos antes de asignar el valor a jugador apra vlaidar conversion por AS
 * @param {String} jugador tipo de jugador que esta en el turno
 * @returns {Number} Numero de puntos del jugador
 */
    export const puntosAS = (puntos, cartaValor, mazo) => {
        
        puntos = puntos + cartaValor;
        if (cartaValor === 11) mazo = mazo + cartaValor;
        if (puntos > 21 && mazo !== 0) {
            puntos = puntos - 10;
            mazo = 0;
        };
        return puntos;
    };