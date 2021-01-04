var jugadas = 0;
function cuentaJugadas(){
    jugadas++;
    var jugadasTexto = (jugadas < 10) ? '0'+jugadas : jugadas;

    let valueJugadas = document.getElementById("jugadas");
    valueJugadas.innerHTML=jugadasTexto;

    if(jugadas == _maxJugadas) perdiste();
}

function iniciaContador(){
    jugadas=0;
    document.getElementById("jugadas").innerHTML="00"
    var max = document.getElementById("maximo");
    max.innerHTML = _maxJugadas;
}