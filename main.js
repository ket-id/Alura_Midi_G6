function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < 9) {
    // evita la repeticion de codigo
    const tecla = listaDeTeclas[contador]
    // trae la segunda clase del item
    const instrumento = tecla.classList[1]
    // template string
    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function () {
        playSonido(idAudio);
    };
    // suma uno a cada vuelta del while
    contador = contador + 1;
    console.log('Vuelta ' + contador);
}



