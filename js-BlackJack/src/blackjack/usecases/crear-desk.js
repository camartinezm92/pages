import _ from 'underscore';


/**
 * Esta funcion crea un nuevo desk de cartas
 * @param {Array<String>} tiposCartas ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} figurasEspeciales ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} restona un nuevo arreglo de desk ordenado de forma aleatoria
 */

export const crearDesk = (tiposCartas, figurasEspeciales) => {

    if(!tiposCartas || tiposCartas === 0)throw new Error(' Tipos de cartas se debe indicado en forma de un arreglo de string');
    
    if(!figurasEspeciales || figurasEspeciales === 0)throw new Error(' Figuras especiales debe indicado en forma de un arreglo de string');

    let desk = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let tip of tiposCartas) {
            desk.push(`${i}${tip}`);
        };
    };
    for (let esp of figurasEspeciales) {
        for (let fig of tiposCartas ) {
            desk.push(`${esp}${fig}`);
        };
    };
    return _.shuffle(desk);
};

