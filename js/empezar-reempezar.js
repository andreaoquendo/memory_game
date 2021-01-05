function goBack(target){ //target es si ganó ó perdió
    var mensajes = Array.from(document.getElementsByClassName("mensaje"));
    mensajes.forEach(element => element.style.display = "none");

    salJuego();
}

function restart(){
    var mensajes = Array.from(document.getElementsByClassName("mensaje"));
    mensajes.forEach(element => element.style.display = "none");

    juego.style.display="block";
    messagepage.style.display="none";

    limpiaCartas();
    prepararMesa();
}

