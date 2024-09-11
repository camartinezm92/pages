
  /**
 * Funcion para abtraer el valor de la carta que se esta jugando
 * @param {String} carta  ejemplo '1D'
 * @returns String '1'
 */
    export const valorCarta = (carta) => {
      if(!carta ) throw new Error('Se requwire una carta') ;
        let valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1;
    }; 