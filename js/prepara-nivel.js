function cambiaNivel(){
    _actualLevel = this.dataset.difficulty;
    entraJuego(); // esto solo pasa cuando se cambia de nivel.
    prepararMesa();
}

function prepareLevel(level){
    document.getElementById("nombre-nivel").innerHTML = level;
    _tiempo = difficulty.time[level];
    _maxJugadas = difficulty.max[level];
    _grupoTarjetas = difficulty.tarjetas[level];
    _grupoTarjetas = _grupoTarjetas.concat(_grupoTarjetas);
}

function prepararMesa(){
    jugadas = 0;
    prepareLevel(_actualLevel);
    preparaTarjetas(_grupoTarjetas);
    iniciaContador();
    iniciaCronometro();
}