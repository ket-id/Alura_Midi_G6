function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // evita la repeticion de codigo
    const tecla = listaDeTeclas[contador]
    // trae la segunda clase del item
    const instrumento = tecla.classList[1]
    // template string
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function () {
        playSonido(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('activa');
    }
}


////////////////////////////////////////////// misma funcion pero arriba mejor optimizado
// let contador = 0;

// while (contador < 9) {
//     // evita la repeticion de codigo
//     const tecla = listaDeTeclas[contador]
//     // trae la segunda clase del item
//     const instrumento = tecla.classList[1]
//     // template string
//     const idAudio = `#sonido_${instrumento}`;

//     tecla.onclick = function () {
//         playSonido(idAudio);
//     };
//     // suma uno a cada vuelta del while
//     contador = contador + 1;
//     console.log('Vuelta ' + contador);
// }



