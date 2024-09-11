//Estrutura de importacion por medio de un archivo dedicado a ello
import { crearDesk, jugarPC, mostratCarta, pedirCarta, puntosAS, valorCarta } from './usecases';

(() => {
    'use strict'


    // Definicion de variables
    let desk = [];
    let asJ = 0;
    let asC = 0;
    let cartaJugada;
    let puntosJugador = 0;
    let puntosComputadora = 0;
    
    // arreglos de tipos y letras
    const figuras = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];
    
    //estruturas document consultas

    const btnPedir = document.querySelector('#btnPedir');
    const btnNuevo = document.querySelector('#btnNuevo');
    const btnDetener = document.querySelector('#btnDetener');
    // selecciona la seccion de puntos de HTML tanto Jugador[0] como Computadora[1].
    const ptsHTML = document.querySelectorAll('medium');
    //selecciona de seccion donde se deben visualizar las caratas se tomaran por los id (#)
    const cartasJ = document.querySelector('#jugador-cartas');
    const cartasC = document.querySelector('#computadora-cartas');
    
    
    
    // funciones de despliegue inicial
    desk=crearDesk(figuras,especiales);
    btnDetener.disabled = true;
    

    //Funciones

    //verificon de puntos por parte del jugador
    const validaciones = (puntos) => {
        if (puntos > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            jugarPC(desk,cartasC,puntosComputadora,puntosJugador,ptsHTML,asC,'Computadora');
            // throw "Perdiste";
        } else if (puntos === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            jugarPC(desk,cartasC,puntosComputadora,puntosJugador,ptsHTML,asC,'Computadora');
        };
    };

    // se reestablecen los valores para reicniar el juego
    const newGame = () => {
        desk = [];
        desk = crearDesk(figuras,especiales);
        puntosComputadora = 0;
        puntosJugador = 0;
        cartaJugada = '';
        ptsHTML[0].innerText = 0;
        ptsHTML[1].innerText = 0;
        cartasJ.innerHTML = "";
        cartasC.innerHTML = "";
        btnDetener.disabled = true;
        btnPedir.disabled = false;
        asC = 0;
        asJ = 0;
    }

    


    //eventos de botones
    // solicitar carta
    btnPedir.addEventListener('click', () => {
        btnDetener.disabled = false;
        cartaJugada = pedirCarta(desk);
        let valorCard = valorCarta(cartaJugada);
        puntosJugador = puntosAS(puntosJugador, valorCard, asJ, 'Jugador')
        mostratCarta(cartaJugada, cartasJ, puntosJugador, ptsHTML,0);

        validaciones(puntosJugador);
    });

    // detener el juego del jugador
    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        jugarPC(desk,cartasC,puntosComputadora,puntosJugador,ptsHTML,asC,'Computadora');
    });

    // Iniciar un nuevo juego
    btnNuevo.addEventListener('click', () => {
        newGame();
    });

    // se esta aunto invocando una funcion anonima
})()