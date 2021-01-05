/*
    quando hay un error, no pasa nada, solo se vuelve al default.
*/

function win(num){ //verifica el win
    if(num==_grupoTarjetas.length){
        ganaste();
    }
}

function acierto(tarjetas){
    document.getElementById("sonido-acierto").cloneNode().play();
    tarjetas.forEach(element => {
        element.classList.add("acertada");
    });
    win(document.getElementsByClassName("acertada").length);
}

//función default que pasa despues de haver abierto dos tarjetas
function abrirdef(tarjetas){
    tarjetas.forEach(element =>{
        element.classList.remove("descubierta");
    });
}