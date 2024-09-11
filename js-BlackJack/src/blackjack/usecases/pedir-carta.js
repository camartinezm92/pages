
/**
 * Asigna la carta que se va a jugar durente el turno y elimina la carta del desk
 * @param {Array<String>} desk  ejemplo [1D,2D,1C,AC,KD...]
 * @returns {String} cartaJugada
 */
export const pedirCarta = (desk) => {
    if (desk.length === 0) throw new Error ("No hay mas cartas en el desk");
    let cartaJugada = desk.pop();
    return cartaJugada;
};