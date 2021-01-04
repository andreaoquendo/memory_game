let niveles = Array.from(document.getElementsByClassName("nivel"));
var _tiempo =1;
var _maxJugadas;
var _grupoTarjetas=[];
var intervalo;
const difficulty = {
    time:{
        easy: 2,
        medium:1,
        hard:1,
        extreme:1
    },
    max:{
        easy: 20,
        medium:15,
        hard:15,
        extreme:10
    },
    tarjetas:{
        easy: ["👽", "👻", "💀", "🤡", "🎅🏻", "🧚🏻"],
        medium:["👽", "👻", "💀", "🤡", "🎅🏻", "🧚🏻", "👩🏻‍💻", "🐟"],
        hard:["👽", "👻", "💀", "🤡", "🎅🏻", "🧚🏻", "👩🏻‍💻", "🐟", "🐙", "🐶"],
        extreme:["👽", "👻", "💀", "🤡", "🎅🏻", "🧚🏻", "👩🏻‍💻", "🐟", "🐙", "🐶", "🌞", "🌳"]
    }
}

function entraJuego(){
    let home = document.getElementsByClassName("level")[0];
    home.style.display="none"
    let game = document.getElementsByClassName("game")[0];
    game.style.display="block";
}

function prepareLevel(level){
    document.getElementById("diff").innerHTML = level;
    _tiempo = difficulty.time[level];
    _maxJugadas = difficulty.max[level];
    _grupoTarjetas = difficulty.tarjetas[level];
    _grupoTarjetas = _grupoTarjetas.concat(_grupoTarjetas);
}

function perdiste(){
    var game = document.getElementsByClassName("rest");
    game[0].style.display="none";
    game[1].style.display="block";
    var mensaje= document.getElementById("fail");
    mensaje.style.display="block";
    clearInterval(intervalo);

    var volver = document.getElementsByClassName("volver")[0];
    volver.addEventListener("click", goBack);
    var intentar = document.getElementsByClassName("intentar")[0];
    intentar.addEventListener("click", restart);
}

function ganaste(){
    var game = document.getElementsByClassName("rest");
    game[0].style.display="none";
    game[1].style.display="block";
    var mensaje= document.getElementById("succeed");
    mensaje.style.display="block";
    clearInterval(intervalo);

    var volver = document.getElementsByClassName("volver")[1];
    volver.addEventListener("click", goBack);
    var intentar = document.getElementsByClassName("intentar")[1];
    intentar.addEventListener("click", restart);
}

function activaNivel(){
    prepareLevel(this.dataset.difficulty);
    preparaTarjetas(_grupoTarjetas);
    entraJuego();
    iniciaContador();
    iniciaCronometro();
}

niveles.forEach(function(elemento){
    elemento.addEventListener("click", activaNivel);
});

function goBack(){
    var pages = document.getElementsByClassName("rest");
    pages[0].style.display="block";
    pages[1].style.display="none";
    var mensajes = document.getElementsByClassName("mensaje");
    mensajes[0].style.display="none";
    mensajes[1].style.display="none";
    var game = document.getElementsByClassName("game")[0];
    game.style.display="none";
    var leverage = document.getElementsByClassName("level")[0];
    leverage.style.display ="block";
}

function restart(){
    var mensajes = document.getElementsByClassName("mensaje");
    mensajes[0].style.display="none";
    mensajes[1].style.display="none";
    var rest = document.getElementsByClassName("rest");
    rest[0].style.display="block";
    rest[1].style.display="none";
    var cartas = Array.from(document.getElementsByClassName("listo"));
    cartas.forEach(function(element){
        element.classList.remove("listo");
    })
    iniciaContador();
    jugadas=0;
    iniciaCronometro();
}