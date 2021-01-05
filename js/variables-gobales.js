let niveles = Array.from(document.getElementsByClassName("nivel"));
var _tiempo =1; //tiempo máximo para jugar
var _maxJugadas; //máximo número de jugadas
var _grupoTarjetas=[]; //el grupo de tarjetas que va a ser repartido
var intervalo; // tiempo a ser usado en el juego
var jugadas = 0;
var _actualLevel = 0;


let homepage = document.getElementsByClassName("homepage")[0];
let gamepage = document.getElementsByClassName("gamepage")[0];
let juego = document.getElementsByClassName("cuerpo-juego")[0];
let messagepage = document.getElementsByClassName("cuerpo-juego")[1];

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
        extreme:["👽", "👻", "🧚🏻", "👩🏻‍💻", "🐟", "🐙", "🐶", "🌞", "🌳"]
    }
} //tiempo, maxJugadas, grupo de tarjetas para cada nivel.

